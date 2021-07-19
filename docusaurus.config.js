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
  themeConfig: {
    navbar: {
      title: 'Nexmoe',
      
      items: [
        {
          type: 'doc',
          docId: 'start',
          position: 'left',
          label: '文档',
        },
        {to: '/blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/theme-nexmoe/hexo-theme-nexmoe',
          label: 'GitHub',
          position: 'right',
        },
      ],
      googleAdsense: {
        dataAdClient: "ca-pub-2058306854838448",
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '快速开始',
              to: '/docs/start',
            },
            {
              label: '常见问题',
              to: '/docs/faq',
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
  },
  plugins: [
    'docusaurus-plugin-google-adsense',
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/theme-nexmoe/hexo-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/theme-nexmoe/hexo-docs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
