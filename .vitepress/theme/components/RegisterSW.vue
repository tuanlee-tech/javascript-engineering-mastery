<script setup>
import { onBeforeMount, ref } from 'vue'

const offlineReady = ref(false)
const needRefresh = ref(false)
const isOffline = ref(!navigator.onLine)
let updateServiceWorker = undefined

function onOfflineReady() {
  offlineReady.value = true
  setTimeout(() => offlineReady.value = false, 4000)
}
function onNeedRefresh() {
  needRefresh.value = true
}
async function close() {
  offlineReady.value = false
  needRefresh.value = false
}

onBeforeMount(async () => {
  // Theo dõi trạng thái mạng
  window.addEventListener('offline', () => isOffline.value = true)
  window.addEventListener('online', () => isOffline.value = false)

  const { registerSW } = await import('virtual:pwa-register')
  updateServiceWorker = registerSW({
    immediate: true,
    onOfflineReady,
    onNeedRefresh,
    onRegistered() {
      console.info('Service Worker registered')
    },
    onRegisterError(e) {
      console.error('Service Worker registration error!', e)
    },
  })
})
</script>

<template>
  <!-- Offline indicator -->
  <div v-if="isOffline" class="offline-bar">
    <span>📴 Offline Mode — Content served from cache</span>
  </div>

  <!-- PWA update toast -->
  <template v-if="offlineReady || needRefresh">
    <div class="pwa-toast" role="alertdialog" aria-labelledby="pwa-message">
      <div id="pwa-message" class="mb-3">
        {{ offlineReady ? '✅ App ready to work offline' : 'New content available, click reload to update.' }}
      </div>
      <button v-if="needRefresh" type="button" class="pwa-refresh" @click="updateServiceWorker?.()">
        Reload
      </button>
      <button type="button" class="pwa-cancel" @click="close">
        Close
      </button>
    </div>
  </template>
</template>

<style>
.offline-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 101;
  background: #b45309;
  color: #fff;
  text-align: center;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
}
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 100;
  text-align: left;
  box-shadow: 3px 4px 5px 0 #8885;
  background-color: #1a1a1a;
  color: #fff;
}
.pwa-toast #pwa-message {
  margin-bottom: 8px;
}
.pwa-toast button {
  border: 1px solid #8885;
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;
  background: #333;
  color: #fff;
  cursor: pointer;
}
.pwa-toast button:hover {
  background: #444;
}
</style>