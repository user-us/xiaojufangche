var app = getApp()
Page({
  data: {
    picurl: getApp().data.picurl,
    note: [
      {
        name: '北京',
        heart_num: '2018.10.23  16:40',
        title: '北京九天八晚房车自驾游旅行团',
        url: getApp().data.picurl+'/images/huod1.png',
        avatar: getApp().data.picurl+'/images/dizhi.png'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '2',
        title: '在北京，九个小酒馆和九个自驾房车成都旅行故事',
        url: getApp().data.picurl+'/images/huod2.png',
        avatar: getApp().data.picurl+'/images/dizhi.png'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '3',
        title: '在北京，九个小酒馆和九个自驾房车成都旅行故事',
        url: getApp().data.picurl+'/images/huod3.png',
        avatar: getApp().data.picurl+'/images/dizhi.png'
      }, {
        name: '大脸猫爱吃鱼',
        heart_num: '4',
        title: getApp().data.picurl+'在北京，九个小酒馆和九个自驾房车成都旅行故事',
        url: getApp().data.picurl+'/images/huod1.png',
        avatar: getApp().data.picurl+'/images/dizhi.png'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '5',
        title: '在北京，九个小酒馆和九个自驾房车成都旅行故事',
        url: 'http://f10.baidu.com/it/u=121654667,1482133440&fm=72',
        avatar: getApp().data.picurl+'/images/dizhi.png'
      }
    ],
    datas: [
      { url: '/pages/index/index', src: getApp().data.picurl + '/images/index1.png', hover: false, name: '首页' },
      { url: '/pages/huodong/huodong', src: getApp().data.picurl + '/images/huo_foot.png', hover: true, name: '活动' },
      { url: '/pages/dingdan/dingdan', src: getApp().data.picurl + '/images/order.png', hover: false, name: '订单' },
      { url: '/pages/personal/personal', src: getApp().data.picurl + '/images/my_foot.png', hover: false, name: '我的' }
    ],
  }
})