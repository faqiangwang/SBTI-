// components/custom-navbar/index.js
Component({
  options: {
    multipleSlots: true
  },

  properties: {
    title: {
      type: String,
      value: ''
    },
    showBack: {
      type: Boolean,
      value: true
    },
    bgColor: {
      type: String,
      value: 'transparent'
    },
    titleColor: {
      type: String,
      value: '#333'
    }
  },

  data: {
    statusBarHeight: 0,
    navigationBarHeight: 44
  },

  lifetimes: {
    attached() {
      // 获取系统信息
      const systemInfo = wx.getSystemInfoSync()
      this.setData({
        statusBarHeight: systemInfo.statusBarHeight,
        // 不同设备的导航栏高度可能不同
        navigationBarHeight: systemInfo.platform === 'android' ? 48 : 44
      })
    }
  },

  methods: {
    onBack() {
      this.triggerEvent('back')
      // 默认行为：返回上一页
      const pages = getCurrentPages()
      if (pages.length > 1) {
        wx.navigateBack()
      } else {
        wx.switchTab({
          url: '/pages/index/index'
        })
      }
    }
  }
})
