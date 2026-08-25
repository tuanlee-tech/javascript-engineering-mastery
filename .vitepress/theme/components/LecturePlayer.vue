<template>
  <div ref="rootRef" class="lecture-player">
    <audio
      ref="audioRef"
      :src="src"
      preload="metadata"
      :crossorigin="crossOrigin"
      @timeupdate="onTimeUpdate"
      @loadedmetadata="onLoadedMetadata"
      @durationchange="onDurationChange"
      @canplay="onCanPlay"
      @waiting="isBuffering = true"
      @playing="isBuffering = false"
      @error="onAudioError"
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

        <!-- Progress -->
        <div
          ref="progressRef"
          class="progress-area"
          @pointerdown="onPointerDown"
          @touchstart="onTouchStart"
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

        <div v-if="audioErrorMessage" class="player-error" role="alert">
          {{ audioErrorMessage }}
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
  transcript: { type: Array, default: () => [] },
  // Chỉ bật khi thực sự cần (vd: sau này dựng waveform bằng WebAudio/Canvas).
  // Để null (mặc định) sẽ KHÔNG render attribute crossorigin — tránh việc Safari/Firefox
  // từ chối phát/seek khi CDN (vd Cloudflare) không trả đủ header CORS cho response Range.
  crossOrigin: { type: String, default: 'anonymous' }
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
const isBuffering = ref(false)
const audioError = ref(null)
let dragMode = null // 'pointer' | 'touch' | null
let rafId = null

// Nếu người dùng seek/skip trước khi audio có đủ metadata (readyState === 0),
// ta lưu lại "ý định seek" ở đây và áp dụng ngay khi audio sẵn sàng,
// thay vì để trình duyệt âm thầm bỏ qua lệnh set currentTime.
const pendingSeek = ref(null) // { time, resume } | null

const supportsPointer = typeof window !== 'undefined' && 'PointerEvent' in window

/* ======================================================================
 * Lưu vị trí đang xem (client-side, localStorage)
 * ----------------------------------------------------------------------
 * Mục tiêu: F5 lại trang (hoặc quay lại sau) thì biết đã nghe tới đâu và
 * tự seek về đúng chỗ đó — nhưng KHÔNG tự play. Lưu theo key riêng cho
 * từng `src` để nhiều bài giảng không đè vị trí của nhau.
 *
 * Dùng try/catch quanh mọi thao tác localStorage vì Safari riêng tư
 * (private browsing) hoặc trình duyệt chặn storage có thể ném lỗi khi
 * gọi setItem/getItem/removeItem.
 * ==================================================================== */
const PROGRESS_STORAGE_PREFIX = 'lecture-player:progress:'
const PROGRESS_MIN_SECONDS = 3 // dưới ngưỡng này coi như chưa bắt đầu nghe, không cần lưu/khôi phục
const PROGRESS_SAVE_INTERVAL_MS = 4000 // throttle ghi localStorage, tránh ghi ở mỗi 'timeupdate' (~4 lần/giây)

function hasLocalStorage() {
  return typeof window !== 'undefined' && !!window.localStorage
}

function progressKey(src) {
  return PROGRESS_STORAGE_PREFIX + src
}

function saveProgress(src, time) {
  if (!hasLocalStorage() || !src) return
  try {
    if (!isFinite(time) || time < PROGRESS_MIN_SECONDS) {
      window.localStorage.removeItem(progressKey(src))
    } else {
      window.localStorage.setItem(progressKey(src), String(time))
    }
  } catch (_) {
    // Bỏ qua — không có localStorage (private mode, quota, v.v.) không nên làm hỏng player.
  }
}

function loadProgress(src) {
  if (!hasLocalStorage() || !src) return 0
  try {
    const raw = window.localStorage.getItem(progressKey(src))
    const time = raw ? parseFloat(raw) : 0
    return isFinite(time) && time >= PROGRESS_MIN_SECONDS ? time : 0
  } catch (_) {
    return 0
  }
}

function clearProgress(src) {
  if (!hasLocalStorage() || !src) return
  try {
    window.localStorage.removeItem(progressKey(src))
  } catch (_) {}
}

let lastProgressSaveAt = 0
// force = true → ghi ngay lập tức, bỏ qua throttle (dùng khi pause / trước khi rời trang).
function persistCurrentProgress(force = false) {
  const audio = audioRef.value
  if (!audio) return
  const now = Date.now()
  if (!force && now - lastProgressSaveAt < PROGRESS_SAVE_INTERVAL_MS) return
  lastProgressSaveAt = now
  saveProgress(props.src, audio.currentTime)
}

// Xếp hàng seek về vị trí đã lưu — dùng chung cơ chế pendingSeek/flushPendingSeek
// sẵn có (an toàn cross-browser) để áp dụng ngay khi audio có đủ metadata.
// resume: false → chỉ khôi phục vị trí, KHÔNG tự play.
function restoreSavedProgress() {
  const saved = loadProgress(props.src)
  if (saved > 0) {
    pendingSeek.value = { time: saved, resume: false }
  }
}

const audioErrorMessage = computed(() => {
  if (!audioError.value) return ''
  const code = audioError.value.code
  switch (code) {
    case 2: // MEDIA_ERR_NETWORK
      return 'Lỗi mạng khi tải audio — có thể CDN chưa hỗ trợ Range request đúng cách.'
    case 3: // MEDIA_ERR_DECODE
      return 'Không giải mã được file audio.'
    case 4: // MEDIA_ERR_SRC_NOT_SUPPORTED
      return 'Không tải được nguồn audio — kiểm tra CORS/đường dẫn file trên server.'
    default:
      return 'Không thể phát audio lúc này.'
  }
})

const progressPercent = computed(() => {
  if (!duration.value || !isFinite(duration.value)) return 0
  return Math.min(100, Math.max(0, (currentTime.value / duration.value) * 100))
})

function formatTime(seconds) {
  if (!seconds || !isFinite(seconds)) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

function togglePlay() {
  if (!audioRef.value) return
  if (isPlaying.value) {
    audioRef.value.pause()
    isPlaying.value = false
    persistCurrentProgress(true)
  } else {
    audioRef.value.play().then(() => { isPlaying.value = true }).catch(() => {})
  }
}

/* ======================================================================
 * Safe Seek — chuẩn hiện đại, cross-browser/cross-OS
 * ----------------------------------------------------------------------
 * Lý do bản cũ lỗi không đồng nhất giữa các trình duyệt/OS và đặc biệt
 * "chỉ lỗi khi lên Cloudflare, chạy localhost thì ổn":
 *
 * 1) fastSeek() KHÔNG được hỗ trợ đồng nhất (Firefox có, Chrome/Safari
 *    ứng xử khác/không có) → seek nhảy lung tung tùy trình duyệt.
 * 2) setTimeout(80ms) để "đoán" khi nào seek xong là một race condition:
 *    trên localhost, Range request trả về gần như tức thời nên 80ms luôn
 *    đủ; qua CDN (Cloudflare) độ trễ mạng dao động theo edge node/quốc gia
 *    truy cập, iOS/Android xử lý stream khác nhau → 80ms có lúc đủ có
 *    lúc không, seek "lúc được lúc không" đúng như mô tả.
 * 3) Set audio.currentTime khi audio.readyState === 0 (chưa có metadata,
 *    ví dụ vừa đổi src hoặc mạng chậm) bị Safari âm thầm bỏ qua hoặc ném
 *    InvalidStateError — lệnh seek bị mất mà không có lỗi rõ ràng.
 *
 * Cách sửa: không đoán thời gian — lắng nghe sự kiện 'seeked' thật sự từ
 * trình duyệt để biết khi nào an toàn để play() lại; nếu audio chưa sẵn
 * sàng thì xếp hàng (pendingSeek) và áp dụng ngay khi 'loadedmetadata'/
 * 'canplay' bắn ra, thay vì set thẳng currentTime và hy vọng nó ăn.
 * ==================================================================== */

function clampTime(time) {
  const max = isFinite(duration.value) && duration.value > 0 ? duration.value : Infinity
  return Math.min(Math.max(0, time), max)
}

// Seek "thật" khi audio đã có đủ metadata (readyState >= HAVE_METADATA).
function commitSeek(audio, target, resume) {
  let settled = false
  const cleanup = () => {
    audio.removeEventListener('seeked', onSeeked)
    clearTimeout(fallbackTimer)
  }
  const onSeeked = () => {
    if (settled) return
    settled = true
    cleanup()
    if (resume) audio.play().catch(() => {})
  }
  // Một số CDN/edge (kể cả Cloudflare khi Range request bị cache/proxy sai)
  // đôi lúc không bắn 'seeked' đúng lúc. Fallback này đảm bảo playback vẫn
  // tiếp tục thay vì bị "kẹt" im lặng mãi mãi.
  const fallbackTimer = setTimeout(() => {
    if (settled) return
    settled = true
    cleanup()
    if (resume) audio.play().catch(() => {})
  }, 800)

  audio.addEventListener('seeked', onSeeked)

  try {
    audio.currentTime = target
  } catch (err) {
    // Một vài phiên bản Safari ném lỗi nếu gọi quá sớm — xếp hàng lại và thử
    // lại ở lần 'canplay' kế tiếp thay vì im lặng bỏ qua.
    cleanup()
    pendingSeek.value = { time: target, resume }
    return
  }

  // Cập nhật UI ngay lập tức (optimistic) để thanh tiến trình phản hồi
  // tức thì, không phải chờ round-trip mạng qua CDN mới thấy handle di chuyển.
  currentTime.value = target
}

function flushPendingSeek() {
  const audio = audioRef.value
  if (!audio || !pendingSeek.value) return
  if (audio.readyState < 1 /* HAVE_METADATA */) return
  const { time, resume } = pendingSeek.value
  pendingSeek.value = null
  commitSeek(audio, clampTime(time), resume)
}

function safeSeek(audio, time, allowResume = true) {
  if (!audio || !isFinite(time)) return
  const target = clampTime(time)
  const wasPlaying = allowResume && !audio.paused && !audio.ended

  if (audio.readyState < 1 /* HAVE_METADATA */) {
    // Audio chưa load xong metadata (thường gặp ngay sau khi đổi src, hoặc
    // mạng chậm) — không set currentTime lúc này, xếp hàng để tránh mất lệnh.
    pendingSeek.value = { time: target, resume: wasPlaying }
    return
  }

  commitSeek(audio, target, wasPlaying)
}

function skip(seconds) {
  const audio = audioRef.value
  if (!audio) return
  const base = pendingSeek.value ? pendingSeek.value.time : audio.currentTime
  safeSeek(audio, base + seconds)
}

function jumpTo(time) {
  safeSeek(audioRef.value, time)
  if (!isPlaying.value) togglePlay()
}

function setSpeed() {
  if (audioRef.value) audioRef.value.playbackRate = parseFloat(playbackRate.value)
}

/* ====== Progress ====== */
function getRatioFromClientX(clientX) {
  if (!progressRef.value) return 0
  const rect = progressRef.value.getBoundingClientRect()
  const x = clientX - rect.left
  return Math.min(1, Math.max(0, x / rect.width))
}

// commit = true  → seek thật sự (khi nhả chuột/ngón tay hoặc click 1 lần)
// commit = false → chỉ cập nhật UI khi đang kéo, KHÔNG gọi audio.currentTime.
//
// Đây là thay đổi quan trọng cho edge case Cloudflare: bản cũ gọi safeSeek
// (tức là set currentTime → trình duyệt bắn Range request tới CDN) trên MỖI
// pointermove khi kéo thanh tiến trình. Trên localhost, request nội bộ gần
// như miễn phí nên không thấy vấn đề gì. Nhưng qua Cloudflare, mỗi lần kéo
// tạo ra hàng loạt Range request dồn dập tới edge; nhiều request bị huỷ giữa
// chừng (do request tiếp theo tới ngay sau đó) khiến edge/origin trả về
// response không nhất quán, hoặc trên mobile (iOS Safari/Android) engine
// media queue các seek này lại và "seek" cuối cùng bị lệch/không chạy.
// → Giờ chỉ có 1 seek network duy nhất khi người dùng thả tay.
function applyRatio(ratio, commit) {
  if (!duration.value || !isFinite(duration.value)) return
  if (commit) {
    safeSeek(audioRef.value, ratio * duration.value, true)
  } else if (rafId == null) {
    // Gộp các lần update UI trong 1 khung hình để mượt và tránh flood reactivity.
    rafId = requestAnimationFrame(() => {
      currentTime.value = ratio * duration.value
      rafId = null
    })
  }
}

/* ====== Pointer ====== */
function onPointerDown(e) {
  if (dragMode === 'touch') return
  if (!duration.value) return
  dragMode = 'pointer'
  isDragging.value = true
  try { progressRef.value?.setPointerCapture?.(e.pointerId) } catch (_) {}
  applyRatio(getRatioFromClientX(e.clientX), false)
}

function onPointerMove(e) {
  if (dragMode !== 'pointer' || !isDragging.value) return
  applyRatio(getRatioFromClientX(e.clientX), false)
}

function onPointerUp(e) {
  if (dragMode !== 'pointer') return
  isDragging.value = false
  dragMode = null
  // Chỉ seek network thật sự khi nhả tay — xem giải thích ở applyRatio().
  applyRatio(getRatioFromClientX(e.clientX), true)
}

/* ====== Touch fallback ====== */
function getTouchClientX(e) {
  const t = e.touches?.[0] ?? e.changedTouches?.[0]
  return t ? t.clientX : 0
}

function onTouchStart(e) {
  if (supportsPointer) return
  if (dragMode === 'pointer') return
  if (!progressRef.value || !duration.value) return
  e.preventDefault()
  dragMode = 'touch'
  isDragging.value = true
  applyRatio(getRatioFromClientX(getTouchClientX(e)), false)
}


function onTouchMove(e) {
  if (dragMode !== 'touch' || !isDragging.value) return
  e.preventDefault()
  applyRatio(getRatioFromClientX(getTouchClientX(e)), false)
}

function onTouchEnd(e) {
  if (dragMode !== 'touch') return
  isDragging.value = false
  dragMode = null
  applyRatio(getRatioFromClientX(getTouchClientX(e)), true)
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
  if (!audioRef.value || isDragging.value) return
  currentTime.value = audioRef.value.currentTime
  persistCurrentProgress()
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
  const audio = audioRef.value
  if (!audio) return
  audioError.value = null
  updateDuration(audio)
  audio.playbackRate = parseFloat(playbackRate.value)
  flushPendingSeek()
}

// duration.value có thể đổi sau loadedmetadata — ví dụ khi origin/CDN không
// trả Content-Length ngay từ đầu (chunked streaming), một số trình duyệt
// (đặc biệt Chrome) trả duration = Infinity lúc mới load rồi mới cập nhật
// giá trị thật khi tải thêm dữ liệu. 'durationchange' bắt được sự thay đổi này.
function onDurationChange() {
  const audio = audioRef.value
  if (!audio) return
  if (audio.duration === Infinity || Number.isNaN(audio.duration)) {
    fixInfiniteDuration(audio)
    return
  }
  updateDuration(audio)
}

function updateDuration(audio) {
  const d = audio.duration
  duration.value = isFinite(d) && d > 0 ? d : 0
}

// Workaround chuẩn cho lỗi duration = Infinity khi server stream audio mà
// không gửi Content-Length (thường gặp khi audio được proxy qua Cloudflare
// Worker/Pages Functions thay vì phục vụ tĩnh trực tiếp). Ép trình duyệt
// seek ra "rất xa" để buộc nó tính lại duration thật, rồi seek về vị trí cũ.
// Nếu server KHÔNG hỗ trợ Range request, thao tác này sẽ không có tác dụng
// và onAudioError/timeout sẽ là nơi báo lỗi rõ ràng thay vì treo im lặng.
let infiniteDurationFixing = false
function fixInfiniteDuration(audio) {
  if (infiniteDurationFixing) return
  infiniteDurationFixing = true
  const prevTime = audio.currentTime
  try {
    audio.currentTime = 1e101
  } catch (_) {
    infiniteDurationFixing = false
    return
  }
  const onFixed = () => {
    audio.removeEventListener('timeupdate', onFixed)
    clearTimeout(giveUpTimer)
    audio.currentTime = prevTime || 0
    updateDuration(audio)
    infiniteDurationFixing = false
  }
  const giveUpTimer = setTimeout(() => {
    audio.removeEventListener('timeupdate', onFixed)
    infiniteDurationFixing = false
  }, 1500)
  audio.addEventListener('timeupdate', onFixed)
}

function onCanPlay() {
  flushPendingSeek()
}

function onAudioError() {
  const audio = audioRef.value
  audioError.value = audio?.error || { code: 0 }
  // Log chi tiết ra console để dễ debug môi trường production (Cloudflare)
  // — thường là thiếu Access-Control-Allow-Origin hoặc Accept-Ranges trên response.
  console.warn(
    '[LecturePlayer] Lỗi tải audio:',
    { code: audio?.error?.code, src: props.src },
    'Kiểm tra: (1) CDN/origin có trả header "Accept-Ranges: bytes" và hỗ trợ HTTP 206 Range request không, ' +
    '(2) nếu dùng prop crossOrigin thì response có header Access-Control-Allow-Origin phù hợp không.'
  )
}

function onEnded() {
  isPlaying.value = false
  // Nghe xong rồi thì xoá mốc đã lưu — lần sau mở lại bắt đầu từ đầu thay vì
  // kẹt ở gần cuối (currentTime lúc 'ended' thường ~= duration).
  clearProgress(props.src)
}

function scrollToActive() {
  nextTick(() => {
    const el = transcriptRef.value?.querySelector('.transcript-item.active')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  })
}

/* ====== Keyboard ====== */
function onKeyDown(e) {
  const tag = e.target?.tagName
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.target?.isContentEditable) return
  // Giữ phím mũi tên tạo hàng loạt sự kiện keydown lặp lại (auto-repeat) —
  // mỗi lần đều gọi skip() → một Range request mới. Trên CDN, các request
  // này chồng lấn và huỷ nhau khiến seek "nhảy loạn". Chỉ xử lý lần nhấn đầu.
  if (e.repeat) { e.preventDefault(); return }
  switch (e.code) {
    case 'Space': e.preventDefault(); togglePlay(); break
    case 'ArrowLeft': e.preventDefault(); skip(-5); break
    case 'ArrowRight': e.preventDefault(); skip(5); break
  }
}

/* ====== Lifecycle ====== */
// F5 / đóng tab / điều hướng ra ngoài không luôn bắn đủ sự kiện để throttle
// trong persistCurrentProgress() kịp ghi lần cuối — 'pagehide' là lựa chọn
// đáng tin cậy hơn 'beforeunload' trên mobile Safari (bfcache) nên bắt cả hai.
function onPageHide() {
  persistCurrentProgress(true)
}

onMounted(() => {
  setupObserver()
  restoreSavedProgress()
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('pagehide', onPageHide)
  window.addEventListener('beforeunload', onPageHide)

  if (supportsPointer) {
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    window.addEventListener('pointercancel', onPointerUp)
  } else {
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', onTouchEnd)
    window.addEventListener('touchcancel', onTouchEnd)
  }
})

onUnmounted(() => {
  if (rafId != null) cancelAnimationFrame(rafId)
  observer?.disconnect()
  persistCurrentProgress(true)
  window.removeEventListener('keydown', onKeyDown)
  window.removeEventListener('pagehide', onPageHide)
  window.removeEventListener('beforeunload', onPageHide)

  if (supportsPointer) {
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('pointerup', onPointerUp)
    window.removeEventListener('pointercancel', onPointerUp)
  } else {
    window.removeEventListener('touchmove', onTouchMove)
    window.removeEventListener('touchend', onTouchEnd)
    window.removeEventListener('touchcancel', onTouchEnd)
  }
})

watch(() => props.src, () => {
  isPlaying.value = false
  currentTime.value = 0
  duration.value = 0
  activeIndex.value = 0
  isExpanded.value = false
  pendingSeek.value = null
  audioError.value = null
  isBuffering.value = false
  lastProgressSaveAt = 0
  restoreSavedProgress() // set lại pendingSeek nếu bài giảng mới có vị trí đã lưu — không autoplay

  // ====================================================================
  // QUAN TRỌNG — fix bug "control bị đơ ở lần điều hướng SPA đầu tiên":
  //
  // VitePress chuyển trang bằng client-side navigation (không reload trang),
  // nên Vue thường TÁI SỬ DỤNG element <audio> đang có sẵn, chỉ patch lại
  // attribute `src` sang file mới thay vì huỷ/tạo DOM node mới.
  //
  // Theo spec, đổi attribute `src` sẽ tự kích hoạt "media element load
  // algorithm" — nhưng trên thực tế, khi thay đổi diễn ra đồng thời với
  // nhiều thay đổi reactive khác (Vue patch cả cây DOM cùng lúc), một số
  // trình duyệt/engine không load lại resource một cách đáng tin cậy ngay
  // lập tức — readyState/duration cũ có thể còn "dính" lại một nhịp.
  // Native reload (F5 / vuốt refresh) luôn tạo hẳn <audio> DOM mới nên
  // luôn đúng — đó là lý do bug này "refresh 1 lần là hết".
  //
  // Gọi load() tường minh buộc trình duyệt reset & bắt đầu lại toàn bộ
  // resource-selection algorithm cho src mới, đảm bảo readyState/duration
  // luôn đồng bộ đúng với file audio hiện tại, bất kể patch hay tạo mới.
  // ====================================================================
  nextTick(() => {
    audioRef.value?.load()
  })
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
  touch-action: none;
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

.player-error {
  margin-top: 4px;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--vp-c-danger-1, #f38ba8);
  background: color-mix(in srgb, var(--vp-c-danger-1, #f38ba8) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--vp-c-danger-1, #f38ba8) 30%, transparent);
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