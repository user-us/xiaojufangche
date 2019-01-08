// pages/fangche_xinxi/fangche_xinxi.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picurl: app.data.picurl,
    num: 1,
    nums: 1,
    yizi: 200,
    yizis: '',
    zhangpeng: 400,
  },
  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    var yizi = this.data.yizi;
    var yizis = this.data.yizis;
    // 如果大于1时，才可以减
    if (num > 1) {
      num--;
      yizi = yizis - yizi;
      console.log(yizi)
      this.setData({
        yizis: yizi
      })
    }

    console.log(this.data.yizi)
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    var yizi = this.data.yizi;
    var yizis = this.data.yizis;
    // 不作过多考虑自增1
    num++;
    yizi = yizis + yizi;
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    this.setData({
      num: num,
      minusStatus: minusStatus,
      yizis: yizi
    });
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var num = e.detail.value;
    var yizi = this.data.yizi;
    var yizis = this.data.yizis;
    yizi = yizi * num;
    // 将数值与状态写回
    this.setData({
      num: num,
      yizis: yizi
    });
  },
  /* 点击减号 */
  bindMinus1: function () {
    var nums = this.data.nums;
    var zhangpeng = this.data.zhangpeng;
    var zhangpengs = this.data.zhangpengs;
    // 如果大于1时，才可以减
    if (nums > 1) {
      nums--;
      zhangpeng = zhangpengs - zhangpeng;
      this.setData({
        zhangpengs: zhangpeng
      })
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus1 = nums <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    this.setData({
      nums: nums,
      minusStatus1: minusStatus1
    });
  },
  /* 点击加号 */
  bindPlus1: function () {
    var nums = this.data.nums;
    var zhangpeng = this.data.zhangpeng;
    var zhangpengs = this.data.zhangpengs;
    // 不作过多考虑自增1
    nums++;
    zhangpeng = zhangpengs + zhangpeng;
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus1 = nums < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回
    this.setData({
      nums: nums,
      minusStatus1: minusStatus1,
      zhangpengs: zhangpeng
    });
  },
  /* 输入框事件 */
  bindManual1: function (e) {
    var nums = e.detail.value;
    var zhangpeng = this.data.zhangpeng;
    zhangpeng = zhangpeng * nums;
    // 将数值与状态写回
    this.setData({
      nums: nums,
      zhangpengs: zhangpeng
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      yizis: that.data.yizi,
      zhangpengs: that.data.zhangpeng,
    })
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