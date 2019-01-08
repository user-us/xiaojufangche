// pages/room_call/room_call.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    checks: [
      { name: "汽车碰撞", value: '0', checked: false },
      { name: "汽车碰撞", value: '1', checked: false },
      { name: "汽车碰撞", value: '2', checked: false },
      { name: "汽车碰撞", value: '3', checked: false },
      { name: "汽车碰撞", value: '4', checked: false },
      { name: "汽车碰撞", value: '5', checked: false },
    ],
    picurl: app.data.picurl,
  },
  clicks: function (e) {
    let index = e.currentTarget.dataset.index;
    let arrs = this.data.checks;
    if (arrs[index].checked == false) {
      arrs[index].checked = true;
    } else {
      arrs[index].checked = false;
    }
    this.setData({
      checks: arrs
    })
  },
  subs: function (e) {
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