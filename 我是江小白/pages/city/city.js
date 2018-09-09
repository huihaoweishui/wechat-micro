// redirect.js navigator.js
const app = getApp()
Page({
  data: {
    lineHeight: '0.1rpx',
    date: '',
    sexData: ["男", "女"],
  },
  onLoad: function(options) {
    let self = this;
    wx.getSystemInfo({
      success: function(res) {
        self.setData({
          lineHeight: (app.globalData.windowWidth * 1 - 3)/(4*app.globalData.windowWidth)  + "%",
        })
        console.log((app.globalData.windowWidth * 1 - 3) / (4 * app.globalData.windowWidth) * 100)
      },
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  }
})