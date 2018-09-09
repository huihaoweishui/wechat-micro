// redirect.js navigator.js
const app = getApp()
Page({
  data: {
    lineHeight: '0.1rpx',
    date: '',
    sexData: ["男", "女"],
  },
  onLoad: function(options) {
    let self = this;
    wx.getSystemInfo({
      success: function(res) {
        self.setData({
          lineHeight: app.globalData.rate * 1 + "rpx",
        })
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
  actioncnt: function() {
    wx.showActionSheet({
      itemList: ['拍照', '手机相册'],
      success: function(res) {
        var sourceType = res.tapIndex == 0 ? "camera" : "album";
        wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: [sourceType], // 可以指定来源是相册还是相机，默认二者都有
          success: function(res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            var tempFilePaths = res.tempFilePaths;
            console.log("临时路径" + tempFilePaths[0]);
            wx.saveFile({
              tempFilePath: tempFilePaths[0],
              success: function(res) {
                var savedFilePath = res.savedFilePath;
                console.log("保存后的路径" + savedFilePath[0]);
              }
            })
          }
        })
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