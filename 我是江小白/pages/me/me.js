const app = getApp()
Page({
  data: {
    scrollX: true,
    scrollY: true,
    scrollTop: 0,
    scrollHeight: '0rpx;',
    firstLineBottomMargin: '1rpx;',
    secondLineTopMargin: '1rpx',
    thirdLineTopMargin: '1rpx'
  },
  onLoad: function () {

    let self = this;
    wx.getSystemInfo({
      success: function (res) {
        self.setData({
          scrollHeight: res.windowHeight * app.globalData.rate - 250 + "rpx", //如果头部没有固定住，在这里调整 180
          firstLineBottomMargin: app.globalData.rate * 12 + "rpx",
          secondLineTopMargin: app.globalData.rate * 15 + "rpx",
          thirdLineTopMargin: app.globalData.rate * 12 + "rpx",
        })
      },
    })

  },
  //事件处理函数
  toTop: function () {
    console.log("totop")
  },
  toBottom: function () {
    console.log("toBottom");
    var that = this;
    var je = {
      id: 1,
      imageSrc: "/image/green_tri.png",
      title: "1v1线上钢琴陪练!专业老师陪孩子,解放家长!(0基础请勿报名)",
      state: "进行中",
      place: "线上活动",
      price: "免费",
      operationName: "报名将截止"
    }
    var oldData = that.data.content;
    oldData.push(je);
    that.setData({
      content: oldData
    })
  },
  scroll: function (e) {

  },
})