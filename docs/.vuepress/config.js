module.exports ={
  title: 'VuePress 快速上手',
  description: 'VuePress基础教程',
  head: [
    ['link',{rel:'icon',href:`/img/favicon.icon`}]
  ],
  themeConfig:{
    nav: [
      {text:'首页',link:'/'},
      {text:'VuePress',link:'/pages/vuepress/'},
      {
        text:'前端技术',
        items:[
          {text:'HTML',link:'/pages/html/'},
          {text:'CSS',link:'/pages/css/'}
        ]
      }

    ],
    sidebar:[
      {
        title:'VuePress',
        collapsable: true,
        children:['/pages/vuepress']
      },
      {
        title:'HTML',
        collapsable: true,
        children:['/pages/html']
      },
      {
        title:'CSS',
        collapsable: true,
        children:['/pages/css']
      }
    ],
    sidebarDepth:2
  }
}