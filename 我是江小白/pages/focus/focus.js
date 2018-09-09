// redirect.js navigator.js
const app = getApp()
Page({
  data: {
    lineHeight: '0.1rpx',
    date: '',
    sexData:["男","女"],
  },
  onLoad: function(options) {
    let self = this;
    wx.getSystemInfo({
      success: function(res) {
        self.setData({
          lineHeight: app.globalData.rate * 1 + "rpx",
        })
      },
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindSexChange: function(e) {
    let self = this;
    this.setData({
      sex: self.data.sexData[e.detail.value]
    })
  },
  actioncnt: function () {
    wx.showActionSheet({
      itemList: ['拍照', '手机相册'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  showview: function () {
    this.setData({
      display: "block"
    })
  },
  hideview: function () {
    this.setData({
      display: "none"
    })
  }

})