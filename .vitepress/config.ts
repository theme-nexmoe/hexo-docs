import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'

const nav = [
  {
    text: "下载安装",
    link: "/college/download",
    activeMatch: `^/do/`,
  },
  {
    text: "反馈",
    items: [
      {
        text: "提意见",
        link: "https://support.qq.com/products/343591",
      },
      {
        text: "常见问题",
        link: "/college/faq",
      },
    ],
  },
]

export const sidebar = {
  "/college/": [
    {
      text: "你好！我是小舒同学！",
      items: [
        {
          text: "⬇️下载安装",
          link: "/college/download",
        },
        {
          text: "🤔常见问题",
          link: "/college/faq",
        },
      ],
    },
    {
      text: "安装帮助",
      items: [
        {
          text: "🌏Edge 如何安装",
          link: "/college/installation/thx-edge",
        },
        {
          text: "💻我是联想用户",
          link: "/college/installation/lenovo",
        },
        {
          text: "❌Download Interrupted",
          link: "/college/installation/download-interrupted",
        },
      ],
    },
    {
      text: "用户怎么用",
      items: [
        {
          text: "小舒同学是怎么帮助我学习，卷死舍友的？",
          link: "https://sspai.com/post/71975",
        },
      ],
    },
    {
      text: "成为我们的伙伴",
      items: [
        {
          text: "💬社区讨论",
          link: "/college/community/",
        },
        {
          text: "💪参与贡献",
          link: "/college/community/contribute",
        },
        {
          text: "🖌️制作效果器",
          link: "/college/community/effector",
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
