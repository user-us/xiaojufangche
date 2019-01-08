// pages/jiashi_peixun/jiashi_peixun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '津工驾校', value: '津工驾校', checked: 'true' },
      { name: '交通联华驾校', value: '交通联华驾校', },
      { name: '鑫华驾校', value: '鑫华驾校' },
      { name: '鑫华驾校1', value: '鑫华驾校1' },
    ],
    xuanzhong:'津工驾校',
    date: '2016-09-01',
  },
  radioChange: function (e) {
    console.log(e)
    this.setData({
      xuanzhong:e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
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