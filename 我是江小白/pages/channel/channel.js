const app = getApp()
Page({
  data: {
    moduleList: [{
      id: 1,
      imgSrc: "/image/icon64_appwx_logo.png",
      name:"亲子"
    }, {
      id: 2,
        imgSrc: "/image/icon_API_HL.png",
        name: "互联网"
    }, {
      id: 3,
        imgSrc: "/image/location.png",
        name: "创投"
    }, {
      id: 4,
        imgSrc: "/image/pause.png",
        name: "户外出游"
    }, {
      id: 5,
        imgSrc: "/image/plus.png",
        name: "职业培训"
    }, {
      id: 6,
        imgSrc: "/image/play.png",
        name: "文艺"
    }, {
      id: 7,
        imgSrc: "/image/record.png",
        name: "演出娱乐"
    }, {
      id: 8,
        imgSrc: "/image/green_tri.png",
        name: "交友"
      }, {
        id: 9,
        imgSrc: "/image/green_tri.png",
        name: "运动健身"
      }, {
        id: 10,
        imgSrc: "/image/green_tri.png",
        name: "丽人时尚"
      }, {
        id: 11,
        imgSrc: "/image/green_tri.png",
        name: "公益文化"
      }, {
        id: 12,
        imgSrc: "/image/green_tri.png",
        name: "线上活动"
      }],
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
      imgSrc: "/image/green_tri.png",
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