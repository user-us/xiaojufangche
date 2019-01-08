// pages/fangchezulin_chexing/fangchezulin_chexing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picurl: getApp().data.picurl,
    chexing:false,
    chedata:['a','2','3'],
    down: [
      { id: 0, value: '拖挂型' },
      { id: 1, value: '自行式' },
      { id: 2, value: '第三种' },
    ],

    showView: false,
    choose1:0
  },
  diqu: function (e) {
    var that = this;
    that.setData({
      showView: !that.data.showView,
    })
  },
  tabsta: function (e) {
    var that = this
    var id = e.currentTarget.dataset.id;
    console.log(id)
    //设置当前样式
    that.setData({
      'show': id
    })
  },
  chooseche:function(){
    this.setData({
      chexing:true
    })
  },
  smallche:function(e){
    console.log(e)
    this.setData({
      choose1: e.currentTarget.dataset.index
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