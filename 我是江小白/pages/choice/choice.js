const app = getApp()
Page({
  data: {
    toView: '',
    which: '',
    chosen: '',
    hidden: true,
    transformCategory: '',
    transformCity: '',
    tabContent: [{
        id: 'A',
        name: '全部'
      },
      {
        id: 'B',
        name: '亲子'
      },
      {
        id: 'C',
        name: '互联网'
      },
      {
        id: 'D',
        name: '创投'
      },
      {
        id: 'E',
        name: '户外出游'
      },
      {
        id: 'F',
        name: '职业培训'
      },
      {
        id: 'G',
        name: '文艺'
      },
      {
        id: 'H',
        name: '演出娱乐'
      },
      {
        id: 'I',
        name: '交友'
      },
      {
        id: 'J',
        name: '运动健身'
      },
      {
        id: 'K',
        name: '丽人时尚'
      },
      {
        id: 'L',
        name: '公益文化'
      },
      {
        id: 'M',
        name: '线上活动'
      }
    ],
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
    scrollX: true,
    scrollY: true,
    scrollTop: 0,
    scrollHeight: '0rpx;',
    firstLineBottomMargin: '1rpx;',
    secondLineTopMargin: '1rpx',
    thirdLineTopMargin: '1rpx'
  },
  onLoad: function() {

    let self = this;
    wx.getSystemInfo({
      success: function(res) {
        self.setData({
          //scrollHeight: res.windowHeight * app.globalData.rate + "rpx", //如果头部没有固定住，在这里调整 有待完善
          firstLineBottomMargin: app.globalData.rate * 12 + "rpx",
          secondLineTopMargin: app.globalData.rate * 15 + "rpx",
          thirdLineTopMargin: app.globalData.rate * 12 + "rpx",
        })
        let height = res.windowHeight;
        wx.createSelectorQuery().selectAll('.search-bar').boundingClientRect(function (rects) {
          rects.forEach(function (rect) {
            self.setData({
              scrollHeight: res.windowHeight - rect.bottom +"px"
            });
          })
        }).exec();
      },
    })
    

  },
  //事件处理函数
  toTop: function() {
    console.log("totop")
  },
  toBottom: function() {
    // console.log("toBottom");
    // var that = this;
    // var je = {
    //   id: 1,
    //   imageSrc: "/image/green_tri.png",
    //   title: "1v1线上钢琴陪练!专业老师陪孩子,解放家长!(0基础请勿报名)",
    //   state: "进行中",
    //   place: "线上活动",
    //   price: "免费",
    //   operationName: "报名将截止"
    // }
    // var oldData = that.data.content;
    // oldData.push(je);
    // that.setData({
    //   content: oldData
    // })
  },
  scroll: function(e) {

  },
  toggleCity: function() {
    this.setData({
      transformCity: this.data.transformCity == '' ? 'rotate(-45deg)' : ''
    })
  },
  toggleCategory: function() {
    this.setData({
      transformCategory: this.data.transformCategory == '' ? 'rotate(-45deg)' : '',
      hidden: !this.data.hidden
    })
  },
  categoryItemClick: function(e) {
    this.setData({
      hidden: !this.data.hidden,
      which: e.currentTarget.dataset.which,
      chosen: e.currentTarget.dataset.which,
      toView: e.currentTarget.dataset.which,
    })
  },
  contentItemCLick: function(e) {
    this.setData({
      chosen: e.currentTarget.dataset.chosen,
      which: e.currentTarget.dataset.chosen,
    })
  },
  preventTouchMove: function(e) {

  },
})