// pages/jiashirenzheng_dati/jiashirenzheng_dati.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '爆胎后，须紧握转向盘', value: '爆胎后，须紧握转向盘',},
      { name: '车辆自身开始减速，只需轻踏制动踏板', value: '车辆自身开始减速，只需轻踏制动踏板', },
      { name: '紧急制动容易引起侧翻', value: '紧急制动容易引起侧翻' },
      { name: '轻踏制动踏板进行减速是为了保护轮胎', value: '轻踏制动踏板进行减速是为了保护轮胎', checked: 'true'  },
    ],
    xuanzhong: '轻踏制动踏板进行减速是为了保护轮胎',

  },
  radioChange: function (e) {
    console.log(e)
    this.setData({
      xuanzhong: e.detail.value
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