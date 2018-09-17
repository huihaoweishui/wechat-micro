const app = getApp()
Page({
  data: {
    baoming: true,
    fixed: false,
    next1: true,
    mask: true,
    content: [{
      id: 1,
      imageSrc: "/image/green_tri.png",
      title: "1v1线上钢琴陪练!专业老师陪孩子,解放家长!(0基础请勿报名)",
      state: "进行中",
      place: "线上活动",
      price: "免费",
      operationName: "报名将截止"
    }, {
      id: 1,
      imageSrc: "/image/green_tri.png",
      title: "1v1线上钢琴陪练!专业老师陪孩子,解放家长!(0基础请勿报名)",
      state: "进行中",
      place: "线上活动",
      price: "免费",
      operationName: "报名将截止"
    }, {
      id: 1,
      imageSrc: "/image/green_tri.png",
      title: "1v1线上钢琴陪练!专业老师陪孩子,解放家长!(0基础请勿报名)",
      state: "进行中",
      place: "线上活动",
      price: "免费",
      operationName: "报名将截止"
    }, {
      id: 1,
      imageSrc: "/image/green_tri.png",
      title: "1v1线上钢琴陪练!专业老师陪孩子,解放家长!(0基础请勿报名)",
      state: "进行中",
      place: "线上活动",
      price: "免费",
      operationName: "报名将截止"
    }, {
      id: 1,
      imageSrc: "/image/green_tri.png",
      title: "1v1线上钢琴陪练!专业老师陪孩子,解放家长!(0基础请勿报名)",
      state: "进行中",
      place: "线上活动",
      price: "免费",
      operationName: "报名将截止"
    }, {
      id: 1,
      imageSrc: "/image/green_tri.png",
      title: "1v1线上钢琴陪练!专业老师陪孩子,解放家长!(0基础请勿报名)",
      state: "进行中",
      place: "线上活动",
      price: "免费",
      operationName: "报名将截止"
    }, {
      id: 1,
      imageSrc: "/image/green_tri.png",
      title: "1v1线上钢琴陪练!专业老师陪孩子,解放家长!(0基础请勿报名)",
      state: "进行中",
      place: "线上活动",
      price: "免费",
      operationName: "报名将截止"
    }, {
      id: 1,
      imageSrc: "/image/green_tri.png",
      title: "1v1线上钢琴陪练!专业老师陪孩子,解放家长!(0基础请勿报名)",
      state: "进行中",
      place: "线上活动",
      price: "免费",
      operationName: "报名将截止"
    }, {
      id: 1,
      imageSrc: "/image/green_tri.png",
      title: "1v1线上钢琴陪练!专业老师陪孩子,解放家长!(0基础请勿报名)",
      state: "进行中",
      place: "线上活动",
      price: "免费",
      operationName: "报名将截止"
    }, {
      id: 1,
      imageSrc: "/image/green_tri.png",
      title: "1v1线上钢琴陪练!专业老师陪孩子,解放家长!(0基础请勿报名)",
      state: "进行中",
      place: "线上活动",
      price: "免费",
      operationName: "报名将截止"
    }],
    scrollY: true,
    scrollTop: 0,
    scrollHeight: '800rpx'
  },
  onLoad: function() {
    let self = this;
    wx.getSystemInfo({
      success: function(res) {
        let height = res.windowHeight;
        var query = wx.createSelectorQuery();
        query.select('.other').boundingClientRect(function(rect) {
          self.setData({
            scrollHeight: height - rect.height + 'px'
          })
        }).exec();
      },
    })
  },
  toBottom: function() {
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
  join: function() {
    this.setData({
      fixed: true,
      baoming: false,
      mask: false
    })
  },
  cancel: function() {
    this.setData({
      fixed: false,
      baoming: true,
      mask: true,
      next1: true
    })
  },
  nextCancel: function() {
    this.setData({
      fixed: false,
      baoming: true,
      mask: true,
      next1: true
    })
  },
  next: function() {
    this.setData({
      baoming: true,
      next1: false
    })
  },
  next1: function() {
    this.setData({
      fixed: false,
      baoming: true,
      mask: true,
      next1: true
    })
  },
  previous: function() {
    this.setData({
      fixed: false,
      baoming: false,
      mask: false,
      next1: true
    })
  }
})