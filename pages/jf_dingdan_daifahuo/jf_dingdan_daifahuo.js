// pages/jf_dingdan_daifahuo/jf_dingdan_daifahuo.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    forbar: { xtitle: '买家已兑换', expressage: '顺丰速运：1201864102634', consignee: '张三三   18310008003', address: '北京北京市丰台区宋家庄北京北京市丰台区宋家', btltle: '帐篷户外3-4人全自动加厚防雨 野营露营帐篷', numb: 'X1', all: '1', zong: '166积分', money: '0', serial: '7386300933', xiatime: '2018-04-06 20:33:01', way: '积分兑换', duitime: '2018-04-06 20:33:01', duifang: '兑换方式', duitimes: '兑换时间', picurl: app.data.picurl, }, 
    picurl: app.data.picurl,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(that.data.picurl)
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