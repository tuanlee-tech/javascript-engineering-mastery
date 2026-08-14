<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const deferredPrompt = ref(null)
const isInstallable = ref(false)
const isIOS = ref(false)
const showIOSGuide = ref(false)
const isInstalled = ref(false)

function onBeforeInstallPrompt(e) {
  e.preventDefault()
  deferredPrompt.value = e
  isInstallable.value = true
}

function onAppInstalled() {
  isInstalled.value = true
  isInstallable.value = false
  deferredPrompt.value = null
}

async function installPWA() {
  if (!deferredPrompt.value) return
  deferredPrompt.value.prompt()
  const { outcome } = await deferredPrompt.value.userChoice
  if (outcome === 'accepted') {
    console.log('User accepted PWA install')
  }
  deferredPrompt.value = null
  isInstallable.value = false
}

function toggleIOSGuide() {
  showIOSGuide.value = !showIOSGuide.value
}

onMounted(() => {
  // Detect iOS (Safari doesn't support beforeinstallprompt)
  const ua = window.navigator.userAgent
  isIOS.value = /iPad|iPhone|iPod/.test(ua) && !window.MSStream

  // Detect if already installed (standalone mode)
  if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
    isInstalled.value = true
  }

  window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
  window.addEventListener('appinstalled', onAppInstalled)
})

onBeforeUnmount(() => {
  window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
  window.removeEventListener('appinstalled', onAppInstalled)
})
</script>

<template>
  <!-- Desktop/Android: Nút cài đặt PWA -->
  <div v-if="isInstallable && !isInstalled" class="install-banner">
    <span class="install-text">📲 Cài đặt để học offline</span>
    <button class="install-btn" @click="installPWA">Cài đặt</button>
    <button class="install-close" @click="isInstallable = false" aria-label="Đóng">✕</button>
  </div>

  <!-- iOS: Hướng dẫn thủ công -->
  <div v-else-if="isIOS && !isInstalled" class="install-banner ios">
    <span class="install-text">📲 iOS: Thêm vào Màn hình chính để học offline</span>
    <button class="install-btn" @click="toggleIOSGuide">Hướng dẫn</button>
    <button class="install-close" @click="isInstalled = true" aria-label="Đóng">✕</button>

    <div v-if="showIOSGuide" class="ios-guide">
      <ol>
        <li>Nhấn nút <strong>Chia sẻ</strong> <span class="icon">⎋</span> dưới thanh Safari</li>
        <li>Kéo xuống và chọn <strong>"Thêm vào Màn hình chính"</strong></li>
        <li>Nhấn <strong>Thêm</strong></li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
.install-banner {
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
  font-size: 14px;
  color: #e2e8f0;
  white-space: nowrap;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from { opacity: 0; transform: translate(-50%, 20px); }
  to   { opacity: 1; transform: translate(-50%, 0); }
}

.install-text {
  font-weight: 500;
}

.install-btn {
  padding: 6px 14px;
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.install-btn:hover {
  background: #2563eb;
}

.install-close {
  background: transparent;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  font-size: 14px;
  padding: 2px 6px;
  line-height: 1;
}

.install-close:hover {
  color: #e2e8f0;
}

/* iOS guide dropdown */
.ios-guide {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 280px;
  padding: 14px 18px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  white-space: normal;
}

.ios-guide ol {
  margin: 0;
  padding-left: 18px;
  font-size: 13px;
  line-height: 1.7;
  color: #cbd5e1;
}

.ios-guide li {
  margin-bottom: 6px;
}

.icon {
  font-size: 16px;
  vertical-align: middle;
}

/* Responsive */
@media (max-width: 480px) {
  .install-banner {
    left: 12px;
    right: 12px;
    transform: none;
    white-space: normal;
    flex-wrap: wrap;
  }
  .install-text {
    flex: 1 1 100%;
    margin-bottom: 4px;
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
}
</style>