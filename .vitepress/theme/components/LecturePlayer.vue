<template>
  <div class="lecture-player">
    <!-- Audio Element -->
    <audio
      ref="audioRef"
      :src="src"
      @timeupdate="onTimeUpdate"
      @loadedmetadata="onLoadedMetadata"
      @ended="onEnded"
      preload="metadata"
    />

    <!-- Player Card -->
    <div class="player-card">
      <!-- Header -->
      <div class="player-header">
        <div class="player-icon">🎧</div>
        <div class="player-meta">
          <div class="player-title">{{ title }}</div>
          <div class="player-subtitle">{{ subtitle }}</div>
        </div>
      </div>

      <!-- Progress Bar -->
      <div class="progress-area" @click="onSeek">
        <div class="progress-track">
          <div class="progress-fill" :style="{ width: progressPercent + '%' }" />
        </div>
        <div class="progress-handle" :style="{ left: progressPercent + '%' }" />
      </div>

      <!-- Controls -->
      <div class="controls-row">
        <div class="control-group">
          <button class="btn-skip" @click="skip(-10)" title="Tua lại 10s">⏪</button>
          <button class="btn-play" @click="togglePlay" :title="isPlaying ? 'Tạm dừng' : 'Phát'">
            <span v-if="isPlaying">⏸</span>
            <span v-else>▶</span>
          </button>
          <button class="btn-skip" @click="skip(10)" title="Tua tới 10s">⏩</button>
        </div>

        <div class="control-group">
          <select v-model="playbackRate" class="speed-select" @change="setSpeed">
            <option value="0.5">0.5x</option>
            <option value="0.75">0.75x</option>
            <option value="1">1.0x</option>
            <option value="1.25">1.25x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2.0x</option>
          </select>
          <span class="time-display">{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</span>
        </div>
      </div>
    </div>

    <!-- Transcript Panel -->
    <div v-if="transcript && transcript.length" class="transcript-panel" ref="transcriptRef">
      <div
        v-for="(segment, index) in transcript"
        :key="index"
        :class="['transcript-item', { active: activeIndex === index }]"
        @click="jumpTo(segment.start)"
      >
        <span class="transcript-time">{{ formatTime(segment.start) }}</span>
        <span class="transcript-text">{{ segment.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  title: { type: String, default: 'Bài giảng' },
  subtitle: { type: String, default: '' },
  transcript: { type: Array, default: () => [] }
  // transcript: [{ start: 0, text: '...' }, { start: 15, text: '...' }]
})

const audioRef = ref(null)
const transcriptRef = ref(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const playbackRate = ref('1')
const activeIndex = ref(0)

const progressPercent = computed(() => {
  if (!duration.value) return 0
  return (currentTime.value / duration.value) * 100
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
    audioRef.value.play().then(() => {
      isPlaying.value = true
    }).catch(() => {
      // Auto-play blocked or load error
    })
  }
}

function skip(seconds) {
  if (!audioRef.value) return
  audioRef.value.currentTime = Math.max(0, Math.min(duration.value, audioRef.value.currentTime + seconds))
}

function jumpTo(time) {
  if (!audioRef.value) return
  audioRef.value.currentTime = time
  if (!isPlaying.value) togglePlay()
}

function onSeek(event) {
  if (!audioRef.value || !duration.value) return
  const rect = event.currentTarget.getBoundingClientRect()
  const percent = (event.clientX - rect.left) / rect.width
  audioRef.value.currentTime = percent * duration.value
}

function setSpeed() {
  if (audioRef.value) {
    audioRef.value.playbackRate = parseFloat(playbackRate.value)
  }
}

function onTimeUpdate() {
  if (!audioRef.value) return
  currentTime.value = audioRef.value.currentTime
  
  // Update active transcript segment
  if (props.transcript.length) {
    for (let i = props.transcript.length - 1; i >= 0; i--) {
      if (currentTime.value >= props.transcript[i].start) {
        if (activeIndex.value !== i) {
          activeIndex.value = i
          scrollToActive()
        }
        break
      }
    }
  }
}

function scrollToActive() {
  nextTick(() => {
    const el = transcriptRef.value?.querySelector('.transcript-item.active')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  })
}

function onLoadedMetadata() {
  if (audioRef.value) {
    duration.value = audioRef.value.duration || 0
    audioRef.value.playbackRate = parseFloat(playbackRate.value)
  }
}

function onEnded() {
  isPlaying.value = false
}

// Keyboard shortcuts
function onKeyDown(e) {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
  switch(e.code) {
    case 'Space':
      e.preventDefault()
      togglePlay()
      break
    case 'ArrowLeft':
      skip(-5)
      break
    case 'ArrowRight':
      skip(5)
      break
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('keydown', onKeyDown)
}

watch(() => props.src, () => {
  isPlaying.value = false
  currentTime.value = 0
  activeIndex.value = 0
})
</script>

<style scoped>
.lecture-player {
  margin: 24px 0;
  font-family: var(--vp-font-family-base, system-ui, sans-serif);
}

.player-card {
  background: var(--vp-c-bg-soft, #1e1e2e);
  border: 1px solid var(--vp-c-divider, #313244);
  border-radius: 16px;
  padding: 20px 24px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.player-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
}

.player-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, var(--vp-c-brand-1, #89b4fa), var(--vp-c-brand-2, #b4befe));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.player-title {
  font-weight: 600;
  font-size: 15px;
  color: var(--vp-c-text-1, #cdd6f4);
  line-height: 1.4;
}

.player-subtitle {
  font-size: 12px;
  color: var(--vp-c-text-2, #6c7086);
  margin-top: 2px;
}

.progress-area {
  position: relative;
  height: 20px;
  cursor: pointer;
  margin-bottom: 4px;
}

.progress-track {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--vp-c-gutter, #313244);
  border-radius: 2px;
  transform: translateY(-50%);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--vp-c-brand-1, #89b4fa), var(--vp-c-brand-2, #b4befe));
  border-radius: 2px;
  transition: width 0.1s linear;
}

.progress-handle {
  position: absolute;
  top: 50%;
  width: 14px;
  height: 14px;
  background: var(--vp-c-text-1, #cdd6f4);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(137,180,250,0.4);
  transition: left 0.1s linear;
}

.controls-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.control-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-skip {
  background: none;
  border: none;
  color: var(--vp-c-text-2, #6c7086);
  cursor: pointer;
  font-size: 18px;
  padding: 6px;
  border-radius: 8px;
  transition: all 0.2s;
}

.btn-skip:hover {
  background: var(--vp-c-bg, #181825);
  color: var(--vp-c-text-1, #cdd6f4);
}

.btn-play {
  width: 52px;
  height: 52px;
  background: linear-gradient(135deg, var(--vp-c-brand-1, #89b4fa), var(--vp-c-brand-2, #b4befe));
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: var(--vp-c-bg, #1e1e2e);
  box-shadow: 0 4px 16px rgba(137,180,250,0.25);
  transition: transform 0.1s;
}

.btn-play:hover {
  transform: scale(1.05);
}

.btn-play:active {
  transform: scale(0.95);
}

.speed-select {
  background: var(--vp-c-bg, #181825);
  border: 1px solid var(--vp-c-divider, #45475a);
  color: var(--vp-c-text-1, #cdd6f4);
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 13px;
  cursor: pointer;
  outline: none;
}

.speed-select:focus {
  border-color: var(--vp-c-brand-1, #89b4fa);
}

.time-display {
  font-size: 13px;
  color: var(--vp-c-text-2, #6c7086);
  font-variant-numeric: tabular-nums;
  min-width: 100px;
  text-align: right;
}

.transcript-panel {
  margin-top: 12px;
  max-height: 320px;
  overflow-y: auto;
  background: var(--vp-c-bg-soft, #1e1e2e);
  border: 1px solid var(--vp-c-divider, #313244);
  border-radius: 12px;
  padding: 8px 0;
}

.transcript-item {
  display: flex;
  gap: 14px;
  padding: 10px 20px;
  cursor: pointer;
  border-left: 3px solid transparent;
  transition: all 0.2s;
  align-items: baseline;
}

.transcript-item:hover {
  background: var(--vp-c-bg, #181825);
}

.transcript-item.active {
  background: rgba(137,180,250,0.08);
  border-left-color: var(--vp-c-brand-1, #89b4fa);
}

.transcript-time {
  font-size: 12px;
  color: var(--vp-c-text-3, #6c7086);
  font-variant-numeric: tabular-nums;
  min-width: 38px;
  flex-shrink: 0;
}

.transcript-text {
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--vp-c-text-2, #a6adc8);
}

.transcript-item.active .transcript-text {
  color: var(--vp-c-text-1, #cdd6f4);
}

@media (max-width: 640px) {
  .player-card { padding: 16px; }
  .controls-row { justify-content: center; }
  .time-display { font-size: 12px; min-width: auto; }
}
</style>