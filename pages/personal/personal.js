// pages/personal/personal.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: [
      { url: '/pages/index/index', src: getApp().data.picurl+'/images/index1.png', hover: false, name: '首页' },
      { url: '/pages/huodong/huodong', src: getApp().data.picurl +'/images/activity1.png', hover: false, name: '活动' },
      { url: '/pages/dingdan/dingdan', src: getApp().data.picurl +'/images/order.png', hover: false, name: '订单' },
      { url: '/pages/personal/personal', src: getApp().data.picurl +'/images/my1.png', hover: true, name: '我的' }
    ],
    picurl: getApp().data.picurl,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})