// pages/travel_route_bookingorder/travel_route_bookingorder.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picurl: app.data.picurl,
    
    checkes: [
      { mon: '满1000减100', value: '0', },
      { mon: '满1500减200', value: '1',  },
      { mon: '不使用优惠券', value: '2', },
    ],
    showViewes:false,
    showViews:false,
  },
  onChangeShowStates: function () {
    var that = this;
    that.setData({
      showViews : !that.data.showViews
    })
  },
  onChangeShowStatess: function () {
    var that = this;
    that.setData({
      showViewes : !that.data.showViewes
    })
  },
  clickes: function (e) {
    console.log(e)
    this.setData({
      qes: e.detail.value
    })
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