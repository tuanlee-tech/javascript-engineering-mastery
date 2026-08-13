import ImageViewerP from '@davidingplus/vitepress-image-viewer'
import type { Theme } from 'vitepress'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import DefaultTheme from 'vitepress/theme'
import LecturePlayer from './components/LecturePlayer.vue'

import '@davidingplus/vitepress-image-viewer/style.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app),
    ImageViewerP(app),
    
    app.component('LecturePlayer', LecturePlayer)

  }
} satisfies Theme
