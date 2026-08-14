<template>
  <div ref="rootRef" class="lecture-player">
    <audio
      ref="audioRef"
      :src="src"
      preload="metadata"
      @timeupdate="onTimeUpdate"
      @loadedmetadata="onLoadedMetadata"
      @ended="onEnded"
    />

    <!-- Normal / Expanded -->
    <Transition name="lp-fade">
      <div v-if="!isFloating || isExpanded" class="player-card" :class="{ 'is-expanded-overlay': isFloating && isExpanded }">
        <div class="player-header">
          <div class="player-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
            </svg>
          </div>
          <div class="player-meta">
            <div class="player-title">{{ title }}</div>
            <div v-if="subtitle" class="player-subtitle">{{ subtitle }}</div>
          </div>
          <button v-if="isFloating" class="btn-icon btn-close" @click="isExpanded = false" aria-label="Thu nhỏ">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/>
            </svg>
          </button>
        </div>

        <!-- Progress: pointer + touch dual support -->
        <div
          ref="progressRef"
          class="progress-area"
          @pointerdown="onPointerDown"
          @touchstart.prevent="onTouchStart"
        >
          <div class="progress-track">
            <div class="progress-fill" :style="{ width: progressPercent + '%' }" />
          </div>
          <div class="progress-handle" :style="{ left: progressPercent + '%' }" />
        </div>

        <div class="controls-row">
          <div class="control-group">
            <button class="btn-icon" @click="skip(-10)" aria-label="Tua lại 10 giây">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/>
              </svg>
            </button>
            <button class="btn-play" @click="togglePlay" :aria-label="isPlaying ? 'Tạm dừng' : 'Phát'">
              <svg v-if="!isPlaying" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              <svg v-else viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>
              </svg>
            </button>
            <button class="btn-icon" @click="skip(10)" aria-label="Tua tới 10 giây">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>
              </svg>
            </button>
          </div>
          <div class="control-group">
            <select v-model="playbackRate" class="speed-select" @change="setSpeed">
              <option value="0.5">0.5×</option>
              <option value="0.75">0.75×</option>
              <option value="1">1.0×</option>
              <option value="1.25">1.25×</option>
              <option value="1.5">1.5×</option>
              <option value="2">2.0×</option>
            </select>
            <span class="time-display">{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</span>
          </div>
        </div>

        <div v-if="transcript && transcript.length" ref="transcriptRef" class="transcript-panel">
          <div
            v-for="(seg, idx) in transcript"
            :key="idx"
            :class="['transcript-item', { active: activeIndex === idx }]"
            @click="jumpTo(seg.start)"
          >
            <span class="transcript-time">{{ formatTime(seg.start) }}</span>
            <span class="transcript-text">{{ seg.text }}</span>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Float Mini -->
    <Transition name="lp-float">
      <div v-if="isFloating && !isExpanded" class="float-player" @click="isExpanded = true">
        <button class="float-play" @click.stop="togglePlay" :aria-label="isPlaying ? 'Tạm dừng' : 'Phát'">
          <svg v-if="!isPlaying" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>
          </svg>
        </button>
        <div class="float-info">
          <div class="float-title">{{ title }}</div>
          <div class="float-bar"><div class="float-progress" :style="{ width: progressPercent + '%' }" /></div>
        </div>
        <span class="float-time">{{ formatTime(currentTime) }}</span>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  title: { type: String, default: 'Bài giảng' },
  subtitle: { type: String, default: '' },
  transcript: { type: Array, default: () => [] }
})

const rootRef = ref(null)
const audioRef = ref(null)
const progressRef = ref(null)
const transcriptRef = ref(null)

const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const playbackRate = ref('1')
const activeIndex = ref(0)
const isFloating = ref(false)
const isExpanded = ref(false)

const isDragging = ref(false)
let dragMode = null // 'pointer' | 'touch' | null

const progressPercent = computed(() => {
  if (!duration.value || duration.value === Infinity) return 0
  return Math.min(100, Math.max(0, (currentTime.value / duration.value) * 100))
})

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

function togglePlay() {
  if (!audioRef.value) return
  if (isPlaying.value) {
    audioRef.value.pause()
    isPlaying.value = false
  } else {
    audioRef.value.play().then(() => { isPlaying.value = true }).catch(() => {})
  }
}

function skip(seconds) {
  if (!audioRef.value) return
  audioRef.value.currentTime = Math.max(0, Math.min(duration.value || 0, audioRef.value.currentTime + seconds))
}

function jumpTo(time) {
  if (!audioRef.value) return
  audioRef.value.currentTime = time
  if (!isPlaying.value) togglePlay()
}

function setSpeed() {
  if (audioRef.value) audioRef.value.playbackRate = parseFloat(playbackRate.value)
}

/* ====== Progress: get ratio from clientX ====== */
function getRatioFromClientX(clientX) {
  if (!progressRef.value) return 0
  const rect = progressRef.value.getBoundingClientRect()
  const x = clientX - rect.left
  return Math.min(1, Math.max(0, x / rect.width))
}

function applyRatio(ratio) {
  if (!audioRef.value || !duration.value) return
  audioRef.value.currentTime = ratio * duration.value
}

/* ====== Pointer (desktop + iOS modern) ====== */
function onPointerDown(e) {
  if (dragMode === 'touch') return // touch đang active, bỏ qua pointer
  dragMode = 'pointer'
  isDragging.value = true
  try { progressRef.value?.setPointerCapture?.(e.pointerId) } catch (_) {}
  applyRatio(getRatioFromClientX(e.clientX))
}

function onPointerMove(e) {
  if (dragMode !== 'pointer' || !isDragging.value) return
  applyRatio(getRatioFromClientX(e.clientX))
}

function onPointerUp(e) {
  if (dragMode !== 'pointer') return
  isDragging.value = false
  dragMode = null
  applyRatio(getRatioFromClientX(e.clientX))
}

/* ====== Touch (Android / Cốc Cốc fallback) ====== */
function getTouchClientX(e) {
  const t = e.touches?.[0] ?? e.changedTouches?.[0]
  return t ? t.clientX : 0
}

function onTouchStart(e) {
  if (!progressRef.value || !duration.value) return
  dragMode = 'touch'
  isDragging.value = true
  applyRatio(getRatioFromClientX(getTouchClientX(e)))
}

function onTouchMove(e) {
  if (dragMode !== 'touch' || !isDragging.value) return
  e.preventDefault()
  applyRatio(getRatioFromClientX(getTouchClientX(e)))
}

function onTouchEnd(e) {
  if (dragMode !== 'touch') return
  isDragging.value = false
  dragMode = null
  applyRatio(getRatioFromClientX(getTouchClientX(e)))
}

/* ====== Scroll Observer ====== */
let observer = null
function setupObserver() {
  if (!rootRef.value || typeof IntersectionObserver === 'undefined') return
  observer = new IntersectionObserver(
    ([entry]) => {
      isFloating.value = !entry.isIntersecting
      if (!isFloating.value) isExpanded.value = false
    },
    { threshold: 0.15 }
  )
  observer.observe(rootRef.value)
}

/* ====== Audio Events ====== */
function onTimeUpdate() {
  if (!audioRef.value) return
  currentTime.value = audioRef.value.currentTime
  if (props.transcript.length) {
    for (let i = props.transcript.length - 1; i >= 0; i--) {
      if (currentTime.value >= props.transcript[i].start) {
        if (activeIndex.value !== i) { activeIndex.value = i; scrollToActive() }
        break
      }
    }
  }
}
function onLoadedMetadata() {
  if (audioRef.value) {
    duration.value = audioRef.value.duration || 0
    audioRef.value.playbackRate = parseFloat(playbackRate.value)
  }
}
function onEnded() { isPlaying.value = false }
function scrollToActive() {
  nextTick(() => {
    const el = transcriptRef.value?.querySelector('.transcript-item.active')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  })
}

/* ====== Keyboard ====== */
function onKeyDown(e) {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return
  switch (e.code) {
    case 'Space': e.preventDefault(); togglePlay(); break
    case 'ArrowLeft': e.preventDefault(); skip(-5); break
    case 'ArrowRight': e.preventDefault(); skip(5); break
  }
}

/* ====== Lifecycle ====== */
onMounted(() => {
  setupObserver()
  window.addEventListener('keydown', onKeyDown)
  // Pointer global
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
  window.addEventListener('pointercancel', onPointerUp)
  // Touch global (passive:false để preventDefault trong touchmove)
  window.addEventListener('touchmove', onTouchMove, { passive: false })
  window.addEventListener('touchend', onTouchEnd)
  window.addEventListener('touchcancel', onTouchEnd)
})

onUnmounted(() => {
  observer?.disconnect()
  window.removeEventListener('keydown', onKeyDown)
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
  window.removeEventListener('pointercancel', onPointerUp)
  window.removeEventListener('touchmove', onTouchMove)
  window.removeEventListener('touchend', onTouchEnd)
  window.removeEventListener('touchcancel', onTouchEnd)
})

watch(() => props.src, () => {
  isPlaying.value = false
  currentTime.value = 0
  activeIndex.value = 0
  isExpanded.value = false
})
</script>

<style scoped>
.lecture-player { margin: 24px 0; font-family: var(--vp-font-family-base, system-ui, -apple-system, sans-serif); }

.player-card {
  background: var(--vp-c-bg-soft, #1e1e2e);
  border: 1px solid var(--vp-c-divider, #313244);
  border-radius: 16px;
  padding: 20px 24px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.12);
}
.player-header {
  display: flex; align-items: center; gap: 14px; margin-bottom: 18px;
}
.player-icon {
  width: 44px; height: 44px;
  background: linear-gradient(135deg, var(--vp-c-brand-1, #89b4fa), var(--vp-c-brand-2, #b4befe));
  border-radius: 12px; display: flex; align-items: center; justify-content: center;
  color: var(--vp-c-bg, #1e1e2e); flex-shrink: 0;
}
.player-meta { min-width: 0; flex: 1; }
.player-title {
  font-weight: 600; font-size: 15px; color: var(--vp-c-text-1, #cdd6f4);
  line-height: 1.35; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.player-subtitle { font-size: 12px; color: var(--vp-c-text-2, #6c7086); margin-top: 2px; }

.progress-area {
  position: relative; height: 28px; cursor: pointer;
  touch-action: none; /* ngăn browser scroll khi touch */
  margin-bottom: 6px;
}
.progress-track {
  position: absolute; top: 50%; left: 0; right: 0; height: 5px;
  background: var(--vp-c-gutter, #313244); border-radius: 3px;
  transform: translateY(-50%); overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--vp-c-brand-1, #89b4fa), var(--vp-c-brand-2, #b4befe));
  border-radius: 3px; will-change: width;
}
.progress-handle {
  position: absolute; top: 50%; width: 16px; height: 16px;
  background: var(--vp-c-text-1, #cdd6f4);
  border: 3px solid var(--vp-c-brand-1, #89b4fa); border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 12px rgba(137,180,250,0.35);
  pointer-events: none; will-change: left;
}

.controls-row {
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 12px;
}
.control-group { display: flex; align-items: center; gap: 8px; }

.btn-icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 38px; height: 38px; background: transparent; border: none;
  border-radius: 10px; color: var(--vp-c-text-2, #6c7086);
  cursor: pointer; transition: all 0.2s;
}
.btn-icon:hover { background: var(--vp-c-bg, #181825); color: var(--vp-c-text-1, #cdd6f4); }
.btn-close { margin-left: auto; }

.btn-play {
  width: 52px; height: 52px;
  background: linear-gradient(135deg, var(--vp-c-brand-1, #89b4fa), var(--vp-c-brand-2, #b4befe));
  border: none; border-radius: 50%; cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--vp-c-bg, #1e1e2e);
  box-shadow: 0 4px 16px rgba(137,180,250,0.25);
  transition: transform 0.15s;
}
.btn-play:hover { transform: scale(1.06); }
.btn-play:active { transform: scale(0.94); }

.speed-select {
  background: var(--vp-c-bg, #181825); border: 1px solid var(--vp-c-divider, #45475a);
  color: var(--vp-c-text-1, #cdd6f4); padding: 5px 10px; border-radius: 8px;
  font-size: 13px; cursor: pointer; outline: none;
}
.speed-select:focus { border-color: var(--vp-c-brand-1, #89b4fa); }

.time-display {
  font-size: 13px; color: var(--vp-c-text-2, #6c7086);
  font-variant-numeric: tabular-nums; min-width: 100px; text-align: right;
}

.transcript-panel {
  margin-top: 14px; max-height: 300px; overflow-y: auto;
  background: var(--vp-c-bg, #181825);
  border: 1px solid var(--vp-c-divider, #313244); border-radius: 12px; padding: 6px 0;
}
.transcript-item {
  display: flex; gap: 14px; padding: 10px 20px; cursor: pointer;
  border-left: 3px solid transparent; transition: all 0.2s; align-items: baseline;
}
.transcript-item:hover { background: rgba(255,255,255,0.03); }
.transcript-item.active {
  background: rgba(137,180,250,0.08);
  border-left-color: var(--vp-c-brand-1, #89b4fa);
}
.transcript-time { font-size: 12px; color: var(--vp-c-text-3, #6c7086); font-variant-numeric: tabular-nums; min-width: 38px; flex-shrink: 0; }
.transcript-text { font-size: 13.5px; line-height: 1.6; color: var(--vp-c-text-2, #a6adc8); }
.transcript-item.active .transcript-text { color: var(--vp-c-text-1, #cdd6f4); }

/* Float */
.float-player {
  position: fixed; bottom: 20px; right: 20px; z-index: 9999;
  display: flex; align-items: center; gap: 12px;
  padding: 10px 14px 10px 12px;
  background: rgba(30, 30, 46, 0.92);
  backdrop-filter: blur(14px) saturate(1.2);
  -webkit-backdrop-filter: blur(14px) saturate(1.2);
  border: 1px solid rgba(255,255,255,0.08); border-radius: 50px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.35);
  cursor: pointer; max-width: min(420px, calc(100vw - 40px));
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s;
}
.float-player:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(0,0,0,0.45); }
.float-player:active { transform: scale(0.97); }
.float-play {
  width: 42px; height: 42px; flex-shrink: 0;
  background: linear-gradient(135deg, var(--vp-c-brand-1, #89b4fa), var(--vp-c-brand-2, #b4befe));
  border: none; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--vp-c-bg, #1e1e2e); cursor: pointer; transition: transform 0.15s;
}
.float-play:active { transform: scale(0.9); }
.float-info { min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 6px; }
.float-title { font-size: 13px; font-weight: 500; color: var(--vp-c-text-1, #cdd6f4); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.float-bar { width: 100%; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden; }
.float-progress { height: 100%; background: linear-gradient(90deg, var(--vp-c-brand-1, #89b4fa), var(--vp-c-brand-2, #b4befe)); border-radius: 2px; transition: width 0.25s linear; }
.float-time { font-size: 11px; color: var(--vp-c-text-3, #6c7086); font-variant-numeric: tabular-nums; flex-shrink: 0; }

/* Expanded overlay */
.is-expanded-overlay {
  position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: min(560px, 92vw); max-height: 85vh; overflow-y: auto;
  z-index: 10000; box-shadow: 0 24px 80px rgba(0,0,0,0.6);
}

/* Transitions */
.lp-fade-enter-active, .lp-fade-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.lp-fade-enter-from, .lp-fade-leave-to { opacity: 0; transform: scale(0.98); }
.lp-float-enter-active { transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1); }
.lp-float-leave-active { transition: all 0.2s ease-in; }
.lp-float-enter-from, .lp-float-leave-to { opacity: 0; transform: translateY(20px) scale(0.9); }

@media (max-width: 640px) {
  .player-card { padding: 16px; }
  .controls-row { justify-content: center; }
  .time-display { min-width: auto; font-size: 12px; }
  .float-player { bottom: 12px; right: 12px; left: 12px; max-width: none; border-radius: 16px; padding: 10px 14px; }
}
</style>