// redirect.js navigator.js
const app = getApp()
Page({
  data: {
    animation: true,
    windowHeight: '',
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
    toView: '',
    scrollTop: 0
  },
  onLoad: function(options) {
    this.setData({
      windowHeight: app.globalData.windowHeight + "px"
    })
  },
  anchor: function(e) {
    this.setData({
      toView: e.currentTarget.dataset.initial
    })
    console.log(this.data.toView)
  }
})