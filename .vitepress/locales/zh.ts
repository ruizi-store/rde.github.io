import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: '简体中文',
  lang: 'zh-CN',
  link: '/zh/',
  description: '瑞子云桌面 — 将 Linux 服务器变成功能丰富的 Web 桌面环境',

  themeConfig: {
    nav: [
      { text: '首页', link: '/zh/' },
      { text: '文档', link: '/zh/docs/guide/what-is-rde' },
    ],

    sidebar: {
      '/zh/docs/': [
        {
          text: '入门',
          collapsed: false,
          items: [
            { text: '什么是 RDE', link: '/zh/docs/guide/what-is-rde' },
            { text: '快速开始', link: '/zh/docs/guide/getting-started' },
            { text: '安装部署', link: '/zh/docs/guide/installation' },
            { text: 'NAS 镜像', link: '/zh/docs/guide/nas' },
          ],
        },
        {
          text: '桌面与应用',
          collapsed: false,
          items: [
            { text: '桌面环境', link: '/zh/docs/guide/desktop' },
            { text: '文件管理', link: '/zh/docs/guide/files' },
            { text: 'Docker 应用商店', link: '/zh/docs/guide/docker' },
            { text: 'Web 终端', link: '/zh/docs/guide/terminal' },
            { text: '下载管理', link: '/zh/docs/guide/download' },
            { text: '更多应用', link: '/zh/docs/guide/apps' },
          ],
        },
        {
          text: '系统管理',
          collapsed: false,
          items: [
            { text: '用户管理', link: '/zh/docs/guide/users' },
            { text: '备份与恢复', link: '/zh/docs/guide/backup' },
            { text: '国际化与镜像加速', link: '/zh/docs/guide/i18n' },
            { text: '通知中心', link: '/zh/docs/guide/notifications' },
            { text: '插件系统', link: '/zh/docs/guide/plugins' },
          ],
        },
        {
          text: '参考',
          collapsed: false,
          items: [
            { text: 'API 参考', link: '/zh/docs/reference/api' },
            { text: '配置说明', link: '/zh/docs/reference/config' },
            { text: '常见问题', link: '/zh/docs/reference/faq' },
          ],
        },
      ],
    },

    footer: {
      message: 'Released under the GPL-3.0 License. | <a href="/zh/docs/guide/what-is-rde">文档</a> · <a href="https://github.com/ruizi-store/rde" target="_blank">GitHub</a><br><span style="display:inline-block;margin-top:12px;">QQ 群：<img src="/qq-group-qrcode.jpg" alt="QQ群二维码" style="width:200px;vertical-align:middle;border-radius:8px;margin-left:8px;"></span>',
      copyright: 'Copyright © 2024-present RDE Team',
    },

    outline: {
      label: '目录',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    lastUpdated: {
      text: '最后更新',
    },
  },
}
