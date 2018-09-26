// redirect.js navigator.js
const app = getApp()
Page({
  data: {
    lineHeight: '0.1rpx',
    date: '',
    sexData: ["男", "女"],
    scrollY: true,
    scrollTop: 0,
    scrollHeight: '0rpx;',
  },
  onLoad: function(options) {
    let self = this;
    wx.getSystemInfo({
      success: function(res) {
        // 排除法 减去其他容器的高度
        let height = res.windowHeight;
        self.setData({
          scrollHeight: height + "px"
        });
        // wx.createSelectorQuery().selectAll('.search-bar').boundingClientRect(function(rects) {
        //   rects.forEach(function(rect) {
        //     self.setData({
        //       scrollHeight: height - rect.bottom + "px"
        //     });
        //   })
        // }).exec();
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
  show: function() {
    wx.showActionSheet({
      itemList: ['推荐给好友', '取消关注'],
      success: function(res) {
        console.log(res.tapIndex)
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })
  },
  showview: function() {
    this.setData({
      display: "block"
    })
  },
  hideview: function() {
    this.setData({
      display: "none"
    })
  }

})