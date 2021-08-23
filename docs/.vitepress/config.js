module.exports = {
  title: '个人学习博客', // 标题
  description: '小菜鸡...', // 副标题
  lang: 'zh-cn',
  base:'/LearningBlog/',
  themeConfig: {
    // 顶部导航栏内容
    nav: [
      { text: '简历', link: '/Resume/' },
    ],
    // 侧边栏导航内容
    sidebar: {
      '/Documentation/': [
        {
          text: 'Javascript',
          children: [
            { text: 'Javascript', link: '/Documentation/javascript/index' },
            { text: 'ES6', link: '/Documentation/javascript/es6' },
            { text: 'test', link: '/Documentation/javascript/test' },
          ],
        },
        {
          text: 'Vue.js',
          children: [
            { text: 'Vue.js', link: '/Documentation/vue/' },
          ],
        },
        {
          text: 'CSS',
          children: [
            { text: 'CSS', link: '/Documentation/css/' },
          ],
        },
      ],
    },
    // 默认是 false, 设置为 true 来启用
    editLinks: true
  },
};