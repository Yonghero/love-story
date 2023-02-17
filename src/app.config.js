export default defineAppConfig({
  pages: [
    'pages/date/index',
    // 'pages/index/index',
    'pages/mine/index',
  ],
  tabBar: {
    list: [
      {
        iconPath: 'assets/tabbar/date.png',
        selectedIconPath: 'assets/tabbar/date.png',
        pagePath: 'pages/date/index',
        text: '纪念'
      },
      {
        iconPath: 'assets/tabbar/mine.png',
        selectedIconPath: 'assets/tabbar/mine-active.png',
        pagePath: 'pages/mine/index',
        text: '我的'
      }
    ],
    selectedColor: '#db639b',
    color: '#f8e0e0',
    backgroundColor: '#fff',
    borderStyle: 'white',
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#f8e0e0',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  }
})