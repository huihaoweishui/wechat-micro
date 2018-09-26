const app = getApp()
Page({
  data: {
    chosen: '',
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
    }],
    scrollX: true,
    scrollY: true,
    scrollTop: 0,
    scrollHeight: '0rpx;',
  },
  onLoad: function() {
    let self = this;
    wx.getSystemInfo({
      success: function(res) {
        let height = res.windowHeight;
        // 排除法 减去其他容器的高度
        wx.createSelectorQuery().selectAll('.search-bar').boundingClientRect(function(rects) {
          rects.forEach(function(rect) {
            self.setData({
              scrollHeight: height - rect.bottom + "px"
            });
          })
        }).exec();
      },
    })
  },
  contentItemCLick: function(e) {
    this.setData({
      chosen: e.currentTarget.dataset.chosen,
    })
  },
})