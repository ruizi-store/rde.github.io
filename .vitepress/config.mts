import { defineConfig } from 'vitepress'
import { zhConfig } from './locales/zh'
import { enConfig } from './locales/en'

export default defineConfig({
  title: 'RDE',
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#4F46E5' }],
  ],

  locales: {
    zh: zhConfig,
    en: enConfig,
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'RDE',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ruizi-store/rde' },
    ],

    search: {
      provider: 'local',
    },
  },
})
