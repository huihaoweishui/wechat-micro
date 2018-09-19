const app = getApp()
Page({
  data: {
    scrollTop: 0,
    scrollHeight: '0rpx;'
  },
  onLoad: function(res) {
    let self = this;
    wx.getSystemInfo({
      success: function(res) {
        let height = res.windowHeight;
        self.setData({
              scrollHeight: height + "px",
            });
        // 排除法 减去其他容器的高度
        // wx.createSelectorQuery().selectAll('.city-bar').boundingClientRect(function(rects) {
        //   rects.forEach(function(rect) {
        //     self.setData({
        //       scrollHeight: height - rect.bottom + "px",
        //     });
        //   })
        // }).exec();
      }
    })


  },
  //事件处理函数
  toTop: function() {},
  toBottom: function() {

  },
  scroll: function(e) {

  },
})