const app = getApp()
Page({
  data: {
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
  join:function(){
    
  }
})