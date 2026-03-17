import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: 'English',
  lang: 'en',
  link: '/en/',
  description: 'RDE — Turn any Linux server into a feature-rich web desktop environment',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Docs', link: '/en/docs/guide/what-is-rde' },
    ],

    sidebar: {
      '/en/docs/': [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'What is RDE', link: '/en/docs/guide/what-is-rde' },
            { text: 'Quick Start', link: '/en/docs/guide/getting-started' },
            { text: 'Installation', link: '/en/docs/guide/installation' },
            { text: 'NAS Image', link: '/en/docs/guide/nas' },
          ],
        },
        {
          text: 'Desktop & Apps',
          collapsed: false,
          items: [
            { text: 'Desktop Environment', link: '/en/docs/guide/desktop' },
            { text: 'File Manager', link: '/en/docs/guide/files' },
            { text: 'Docker App Store', link: '/en/docs/guide/docker' },
            { text: 'Web Terminal', link: '/en/docs/guide/terminal' },
            { text: 'Download Manager', link: '/en/docs/guide/download' },
            { text: 'More Apps', link: '/en/docs/guide/apps' },
          ],
        },
        {
          text: 'System',
          collapsed: false,
          items: [
            { text: 'User Management', link: '/en/docs/guide/users' },
            { text: 'Backup & Restore', link: '/en/docs/guide/backup' },
            { text: 'i18n & Mirror Acceleration', link: '/en/docs/guide/i18n' },
            { text: 'Notification Center', link: '/en/docs/guide/notifications' },
            { text: 'Plugin System', link: '/en/docs/guide/plugins' },
          ],
        },
        {
          text: 'Reference',
          collapsed: false,
          items: [
            { text: 'API Reference', link: '/en/docs/reference/api' },
            { text: 'Configuration', link: '/en/docs/reference/config' },
            { text: 'FAQ', link: '/en/docs/reference/faq' },
          ],
        },
      ],
    },

    footer: {
      message: 'Released under the GPL-3.0 License. | <a href="/en/docs/guide/what-is-rde">Docs</a> · <a href="https://github.com/ruizi-store/rde" target="_blank">GitHub</a><br><span style="display:inline-block;margin-top:12px;">QQ Group: <img src="/qq-group-qrcode.jpg" alt="QQ Group QR Code" style="width:180px;height:180px;vertical-align:middle;border-radius:8px;margin-left:8px;"></span>',
      copyright: 'Copyright © 2024-present RDE Team',
    },

    outline: {
      label: 'On this page',
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },

    lastUpdated: {
      text: 'Last updated',
    },
  },
}
