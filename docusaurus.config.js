const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Hexo Theme Nexmoe',
  tagline: '🔥 一个比较特别的 Hexo 主题',
  url: 'https://docs.nexmoe.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'theme-nexmoe', // Usually your GitHub org/user name.
  projectName: 'Hexo Theme Nexmoe', // Usually your repo name.
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },
  themeConfig: {
    navbar: {
      title: 'Nexmoe',
      
      items: [
        {
          type: 'doc',
          docId: 'welcome',
          position: 'left',
          label: '文档',
        },
        {to: '/blog', label: '博客', position: 'left'},
        {to: '/contribution', label: '参与贡献', position: 'left'},
        {
          href: 'https://github.com/theme-nexmoe/hexo-theme-nexmoe',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '快速开始',
              to: '/start',
            },
            {
              label: '常见问题',
              to: '/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/theme-nexmoe/hexo-theme-nexmoe',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nexmoe. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    googleAdsense: { dataAdClient: 'ca-pub-2058306854838448' },
    algolia: {
      apiKey: '97d0ec378a6740430371860e28d1f485',
      indexName: 'nexmoe',

      // Optional: see doc section below
      contextualSearch: true,

    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/theme-nexmoe/hexo-docs/edit/master/',
            routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/theme-nexmoe/hexo-docs/edit/master/blog/',
          /**
           * 截断标记，可为正则表达式或字符串。
           */
          truncateMarker: /<!--\s*(more)\s*-->/,
          /**
           * 显示博文的估计阅读时间。
           */
          showReadingTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, 'plugin-google-adsense'),
  ],
};
