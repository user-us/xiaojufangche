// pages/rili/rili.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    beginTime: {
      type: String, 	// 开始时间
      value: '09:00'
    },
    endTime: {
      type: String,	// 结束时间
      value: '21:00'
    },
    timeGap: {
      type: Number,	// 单位时间(min)
      value: 60
    },
    show: {
      type: Boolean, 	// 显示或隐藏遮罩
      value: false
    },
    showOverdue: {      // 显示或隐藏过期时间
      type: Boolean,
      value: true
    },
    themeColor: {       // 主题颜色
      type: String,
      value: '#ffd00a'
    }
  },
  updatime:function(){
    this.setData({
      show:true
    })
  },
  _yybindchange:function(){
    console.log('aaa')
  },
  _yybindhide:function(){
    console.log('333')
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