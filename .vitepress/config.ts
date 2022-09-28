import { defineConfig } from 'vitepress'

const nav = [
  {
    text: 'Quick Start',
    link: '/v4.0/',
    activeMatch: `^/v4.0/`
  },
  {
    text: 'Version',
    items: [
      {
        text: 'v4.0',
        link: '/v4.0/',
        activeMatch: `^/v4.0/`
      },
      {
        text: 'v3.2',
        link: '/v3.2/',
        activeMatch: `^/v3.2/`
      }
    ]
  }
]

export const sidebar = {
  '/v3.2/': [
    {
      items: [
        {
          text: '欢迎',
          link: '/v3.2/'
        },
        {
          text: '快速开始',
          link: '/v3.2/start'
        },
        {
          text: '常见问题',
          link: '/v3.2/faq'
        }
      ]
    },
    {
      text: '主题配置',
      items: [
        {
          text: '评论系统',
          link: '/v3.2/config/comment'
        },
        {
          text: '分析系统',
          link: '/v3.2/config/analysis'
        },
        {
          text: '图标',
          link: '/v3.2/config/icon'
        },
        {
          text: '搜索',
          link: '/v3.2/config/search'
        },
        {
          text: '样式与颜色',
          link: '/v3.2/config/style-color'
        }
      ]
    },
    {
      text: '文章页面',
      items: [
        {
          text: 'Front-matter',
          link: '/v3.2/article/front-matter'
        },
        {
          text: '归档页面',
          link: '/v3.2/article/archive'
        },
        {
          text: '文章封面图',
          link: '/v3.2/article/cover'
        },
        {
          text: '瀑布流图片',
          link: '/v3.2/article/gallery'
        },
        {
          text: '友情链接',
          link: '/v3.2/article/py'
        }
      ]
    },
    {
      text: 'Hexo 使用',
      items: [
        {
          text: '插入音乐',
          link: '/v3.2/hexo/aplayer'
        },
        {
          text: 'RSS',
          link: '/v3.2/hexo/rss'
        }
      ]
    },
    {
      items: [
        {
          text: '版本升级规范',
          link: '/v3.2/specification'
        },
        {
          text: '参与贡献',
          link: '/v3.2/contribution'
        },
        {
          text: '迁移至NPM版本',
          link: '/v3.2/migration'
        },
        {
          text: '遇到问题怎么办？',
          link: '/v3.2/question'
        }
      ]
    }
  ],
  '/v4.0/': [
    {
      items: [
        {
          text: 'Quick Start',
          link: '/v4.0/'
        },
        {
          text: 'FAQ',
          link: '/v4.0/faq'
        }
      ]
    },
    {
      text: 'Theme Config',
      items: [
        {
          text: 'Slot',
          link: '/v4.0/config/slot'
        },
        {
          text: 'Style',
          link: '/v4.0/config/style'
        },
        /*
        {
          text: 'Icon',
          link: '/v4.0/config/icon'
        },
        {
          text: 'Search',
          link: '/v4.0/config/search'
        }
        */
      ]
    }
    /*
    {
      text: "Posts & Pages",
      items: [
        {
          text: "Front-matter",
          link: "/v4.0/article/front-matter",
        },
        {
          text: "Archive",
          link: "/v4.0/article/archive",
        },
        {
          text: "Cover",
          link: "/v4.0/article/cover",
        },
        {
          text: "Gallery",
          link: "/v4.0/article/gallery",
        },
        {
          text: "Links",
          link: "/v4.0/article/py",
        },
      ],
    },
    */
  ]
}

export default defineConfig({
  lang: 'zh',
  title: 'Hexo Theme Nexmoe',
  description: '🔥 A rather special Hexo theme',
  srcDir: 'src',

  head: [
    [
      'meta',
      {
        name: 'keywords',
        content: 'hexo,nexmoe,theme,blog,beautiful,simple'
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
        src: 'https://www.googletagmanager.com/gtag/js?id=G-HG5GSWYXHL',
        async: 'true'
      }
    ],
    ['script', { src: '/gtag.js' }],
    ['script', { async: "true", crossorigin: "anonymous", src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2058306854838448' }]
  ],

  themeConfig: {
    nav,
    sidebar,

    algolia: {
      indexName: 'nexmoe',
      appId: 'BH4D9OD16A',
      apiKey: '97d0ec378a6740430371860e28d1f485',
    },

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/nexmoe' },
      {
        icon: 'github',
        link: 'https://github.com/theme-nexmoe/hexo-theme-nexmoe'
      }
    ]
  }
})
