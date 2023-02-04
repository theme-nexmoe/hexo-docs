import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

const ogUrl = 'https://docs.nexmoe.com/'
const ogDescription = '🔥 一个比较特别的 Hexo 主题'
const ogLogo = '/icon.svg'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: 'Hexo Theme Nexmoe',
  titleTemplate: '🔥 一个比较特别的 Hexo 主题',
  description: ogDescription,
  head: [
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }]
  ],

  themeConfig: {
    nav: [
      {
        text: '快速开始',
        link: '/zh/v4.0/',
        activeMatch: `^/zh/v4.0/`
      },
      {
        text: '版本',
        items: [
          {
            text: 'v4.0',
            link: '/zh/v4.0/',
            activeMatch: `^/zh/v4.0/`
          },
          {
            text: 'v3.2',
            link: '/zh/v3.2/',
            activeMatch: `^/zh/v3.2/`
          }
        ]
      }
    ],
    sidebar: {
      '/zh/v3.2/': [
        {
          items: [
            {
              text: '欢迎',
              link: '/zh/v3.2/'
            },
            {
              text: '快速开始',
              link: '/zh/v3.2/start'
            },
            {
              text: '常见问题',
              link: '/zh/v3.2/faq'
            }
          ]
        },
        {
          text: '主题配置',
          items: [
            {
              text: '评论系统',
              link: '/zh/v3.2/config/comment'
            },
            {
              text: '分析系统',
              link: '/zh/v3.2/config/analysis'
            },
            {
              text: '图标',
              link: '/zh/v3.2/config/icon'
            },
            {
              text: '搜索',
              link: '/zh/v3.2/config/search'
            },
            {
              text: '样式与颜色',
              link: '/zh/v3.2/config/style-color'
            }
          ]
        },
        {
          text: '文章页面',
          items: [
            {
              text: 'Front-matter',
              link: '/zh/v3.2/article/front-matter'
            },
            {
              text: '归档页面',
              link: '/zh/v3.2/article/archive'
            },
            {
              text: '文章封面图',
              link: '/zh/v3.2/article/cover'
            },
            {
              text: '瀑布流图片',
              link: '/zh/v3.2/article/gallery'
            },
            {
              text: '友情链接',
              link: '/zh/v3.2/article/py'
            }
          ]
        },
        {
          text: 'Hexo 使用',
          items: [
            {
              text: '插入音乐',
              link: '/zh/v3.2/hexo/aplayer'
            },
            {
              text: 'RSS',
              link: '/zh/v3.2/hexo/rss'
            }
          ]
        },
        {
          items: [
            {
              text: '版本升级规范',
              link: '/zh/v3.2/specification'
            },
            {
              text: '参与贡献',
              link: '/zh/v3.2/contribution'
            },
            {
              text: '迁移至NPM版本',
              link: '/zh/v3.2/migration'
            },
            {
              text: '遇到问题怎么办？',
              link: '/zh/v3.2/question'
            }
          ]
        }
      ],
      '/zh/v4.0/': [
        {
          items: [
            {
              text: '快速开始',
              link: '/zh/v4.0/'
            },
            {
              text: '常见问题',
              link: '/zh/v4.0/faq'
            }
          ]
        },
        {
          text: '主题配置',
          items: [
            {
              text: '配置文件',
              link: '/zh/v4.0/config/yml'
            },
            {
              text: '插槽',
              link: '/zh/v4.0/config/slot'
            },
            {
              text: '样式',
              link: '/zh/v4.0/config/style'
            }
            /*
            {
              text: 'Icon',
              link: '/zh/v4.0/config/icon'
            },
            {
              text: 'Search',
              link: '/zh/v4.0/config/search'
            }
            */
          ]
        },
        {
          text: 'Posts & Pages',
          items: [
            {
              text: 'Front-matter',
              link: '/zh/v4.0/post/front-matter'
            },
            // {
            //   text: "Archive",
            //   link: "/v4.0/article/archive",
            // },
            // {
            //   text: "Cover",
            //   link: "/v4.0/article/cover",
            // },
            {
              text: 'Gallery',
              link: '/zh/v4.0/post/gallery'
            },
            {
              text: 'Gallery Pro',
              link: '/zh/v4.0/post/gallery_pro'
            },
            {
              text: 'Links',
              link: '/zh/v4.0/post/links'
            }
          ]
        },
        {
          items: [
            {
              text: 'Contribution',
              link: '/zh/v4.0/contribution'
            }
          ]
        }
      ]
    }
  }
}
