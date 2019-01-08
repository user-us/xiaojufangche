// pages/room_obligation/room_obligation.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    room_ding: { roomtitles: '审核中', roomadds: '后台正在审核，请保持电话畅通。客服将于30分钟内与您联系！', showView: false, showViews: false, showViewes: false, picurl: app.data.picurl,},
  
    showView:false,
    showViews: false,
    showViewes: false,
    picurl: app.data.picurl,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onChangeShowState: function (e) {
    console.log(e);
    var that = this;
    that.data.room_ding.showView = !that.data.room_ding.showView;
    that.setData({
      room_ding: that.data.room_ding
    })
  },
  onChangeShowStates: function () {
    var that = this;
    that.data.room_ding.showViews = !that.data.room_ding.showViews;
    that.setData({
      room_ding: that.data.room_ding
    })
  },
  onChangeShowStatess: function () {
    var that = this;
    that.data.room_ding.showViewes = !that.data.room_ding.showViewes;
    that.setData({
      room_ding: that.data.room_ding
    })
  },
  onLoad: function (options) {
    // var that = this;
    // var a = util.onChangeShowState(that.data.showView)
    // console.log("here: ") 
    // console.log(a)
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