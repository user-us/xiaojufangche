// pages/jfsc_shangpinxiangqing/jfsc_shangpinxiangqing.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0,
    }, 
    chimg: false,
    index: '1',
    show: false,
    picurl: app.data.picurl,
  },
  changeImg: function (e) {
    var that = this;
    that.setData({
      chimg: !that.data.chimg
    })
  },
  handerChange: function (e) {
    this.setData({
      index: e.detail.current + 1
    })
  },
  play_add: function (e) {
    var that = this;
    that.setData({
      show: true,
    })
  },
  close: function () {
    this.setData({
      show: false
    })
  },
  tabFun: function (e) {
    //获取触发事件组件的dataset属性 
    var _datasetId = e.target.dataset.id;
    var _obj = {};
    _obj.curHdIndex = _datasetId;
    _obj.curBdIndex = _datasetId;
    this.setData({
      tabArr: _obj
    });
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