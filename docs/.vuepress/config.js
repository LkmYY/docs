module.exports = {
  title: '云gg的资源库', // 网站的标题
  description: '', // 网站的描述
  base: '/', // 网站的基础 URL
  head: [
    ['link', { rel: 'stylesheet', href: '/styles/style.css' }]
  ],
  // theme: 'hope',
  themeConfig: {
    nav: [ // 导航栏配置
      { text: '首页', link: '/API/iosAndAndroid.html' },
      { text: '其他资源', link: '/API/ziyuan.html' },
      { text: '前端问题', link: '/web/webBUG.html' },
    ],
    sidebar: { // 侧边栏配置
      '/API/': [
        'iosAndAndroid',
        'ziyuan',
        'stableDiffusion',
        'ai',
        'jishu'
      ],
      '/web/': [
        'webBUG'
      ]
    },
  },
  plugins: [ // 插件配置
    '@vuepress/back-to-top', // 启用“回到顶部”插件
    '@vuepress/medium-zoom', // 启用图片缩放插件
    // '@vuepress/plugin-theme-data'
    // , 
    // ['vuepress-plugin-next-search', {
    //   fullText: true,
    //   placeholder: '搜索',
    //   frontmatter: {
    //     tag: '标签',
    //     category: '分类',
    //   }
    // }]
  ],
};
