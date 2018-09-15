const app = getApp()
Page({
  data: {
    currentCity:'无锡',
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
    thirdLineTopMargin: '1rpx',
    // city
    hidden2: true,
    animation: true,
    windowHeight2: '',
    initialArray: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'k', 'l', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'],
    initialAndItsChild: [{
        initial: 'A',
        child: ['澳门', '安庆', '安顺', '安阳', '鞍山', '安康', '阿坝', '阿拉善', '阿里', '阿克苏', '阿勒泰', '阿拉尔']
      },
      {
        initial: 'B',
        child: ['北京', '蚌埠', '毫州', '白银', '毕节', '保定', '白城', '白山', '本溪', '滨州', '宝鸡', '巴中', '保山', '北海', '白色', '包头', '巴彦淖尔', '白沙县', '保亭县', '博尔塔拉', '巴音郭楞']
      },
      {
        initial: 'C',
        child: ['重庆', '滁州', '巢湖', '池州', '潮州', '承德', '沧州', '长沙', '常德', '郴州', '长春', '常州', '朝阳', '长治', '成都', '楚雄', '崇左', '赤峰', '澄迈', '昌江县', '昌都', '喀什', '昌吉']
      },
      {
        initial: 'D',
        child: ['定西', '东莞', '大庆', '大兴安岭', '大连']
      },
      {
        initial: 'E',
        child: ['鄂州', '恩施', '鄂尔多斯']
      },
      {
        initial: 'F',
        child: ['阜阳', '佛山', '福州', '抚州', '阜新']
      },
      {
        initial: 'G',
        child: ['甘南', '广州', '贵阳', '赣州', '广元']
      }
    ],
    toView2: '',
    scrollTop2: 0
  },
  onLoad: function() {
    let self = this;
    wx.getSystemInfo({
      success: function(res) {
        self.setData({
          //scrollHeight: res.windowHeight * app.globalData.rate + "rpx", //如果头部没有固定住，在这里调整 有待完善
          firstLineBottomMargin: app.globalData.rate * 12 + "rpx",
          secondLineTopMargin: app.globalData.rate * 15 + "rpx",
          thirdLineTopMargin: app.globalData.rate * 5 + "rpx",
        })
        let height = res.windowHeight;
        // 排除法 减去其他容器的高度
        wx.createSelectorQuery().selectAll('.city-bar').boundingClientRect(function(rects) {
          rects.forEach(function(rect) {
            self.setData({
              windowHeight2: height - rect.bottom + "px",
            });
          })
        }).exec();
        // 排除法 减去其他容器的高度
        wx.createSelectorQuery().selectAll('.search-bar').boundingClientRect(function (rects) {
          rects.forEach(function (rect) {
            self.setData({
              scrollHeight: height - rect.bottom + "px"
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
  scroll: function(e) {

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
  anchor: function(e) {
    this.setData({
      toView2: e.currentTarget.dataset.initial
    })
  },
  showCity: function() {
    this.setData({
      hidden2: !this.data.hidden2,
      transformCity: this.data.transformCity == '' ? 'rotate(-45deg)' : '',
    })
  },
  confirmCity:function(e){
    this.setData({
      currentCity: e.currentTarget.dataset.name,
      transformCity: this.data.transformCity == '' ? 'rotate(-45deg)' : '',
      hidden2: !this.data.hidden2
    })
  }
})