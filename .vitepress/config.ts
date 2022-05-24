import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'

const nav = [
  {
    text: "Quick Start",
    link: "/v4.0/",
    activeMatch: `^/v4.0/`,
  },
  {
    text: "Version",
    items: [
      {
        text: "v4.0",
        link: "/v4.0/",
        activeMatch: `^/v4.0/`,
      },
      {
        text: "v3.2",
        link: "/v3.2/",
        activeMatch: `^/v3.2/`,
      },
    ],
  },
]

export const sidebar = {
  "/v3.2/": [
    {
      items: [
        {
          text: "欢迎",
          link: "/v3.2/",
        },
        {
          text: "快速开始",
          link: "/v3.2/start",
        },
        {
          text: "常见问题",
          link: "/v3.2/faq",
        },
      ],
    },
    {
      text: "主题配置",
      items: [
        {
          text: "评论系统",
          link: "/v3.2/config/comment",
        },
        {
          text: "分析系统",
          link: "/v3.2/config/analysis",
        },
        {
          text: "图标",
          link: "/v3.2/config/icon",
        },
        {
          text: "搜索",
          link: "/v3.2/config/search",
        },
        {
          text: "样式与颜色",
          link: "/v3.2/config/style-color",
        },  
      ],
    },
    {
      text: "文章页面",
      items: [
        {
          text: "Front-matter",
          link: "/v3.2/config/comment",
        },
        {
          text: "归档页面",
          link: "/v3.2/article/archive",
        },
        {
          text: "文章封面图",
          link: "/v3.2/article/cover",
        },
        {
          text: "瀑布流图片",
          link: "/v3.2/article/gallery",
        },
        {
          text: "友情链接",
          link: "/v3.2/article/py",
        },  
      ],
    },
    {
      text: "Hexo 使用",
      items: [
        {
          text: "插入音乐",
          link: "/v3.2/hexo/aplayer",
        }
      ],
    },
    {
      items: [
        {
          text: "版本升级规范",
          link: "/v3.2/specification",
        },
        {
          text: "参与贡献",
          link: "/v3.2/contribution",
        },
        {
          text: "迁移至NPM版本",
          link: "/v3.2/migration",
        },
        {
          text: "遇到问题怎么办？",
          link: "/v3.2/question",
        },
      ],
    },
  ],
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'zh',
  title: 'Hexo Theme Nexmoe',
  description:
    '🔥 A rather special Hexo theme',
  srcDir: 'src',

  head: [
    [
      'meta',
      {
        name: 'keywords',
        content:
          'hexo,nexmoe,theme,blog,beautiful,simple'
      }
    ],
    [
      'link',
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        sizes: '32x32',
        href: `/favicon.ico`
      }
    ],
    [
      'script',
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-FNQYESQCJ6',
        async: 'true'
      }
    ],
    ['script', { src: '/gtag.js' }]
  ],

  themeConfig: {
    nav,
    sidebar,

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/nexmoe' },
      {
        icon: 'github',
        link: 'https://github.com/theme-nexmoe/hexo-theme-nexmoe'
      }
    ]
  },
})
