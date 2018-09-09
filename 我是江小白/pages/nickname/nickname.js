// redirect.js navigator.js
const app = getApp()
Page({
  data: {
  },
  onLoad: function (options) {
    
  },
  bindComplete: function (e) {
    let self = this;
    this.setData({
      sex: self.data.sexData[e.detail.value]
    })
  }
})