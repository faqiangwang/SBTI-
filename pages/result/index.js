// pages/result/index.js
const types = require('../../data/types.js')
const { calculateResult } = require('../../utils/calculate.js')

Page({
  data: {
    result: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取得分数据
    const scores = JSON.parse(options.scores)

    // 计算结果
    const resultKey = calculateResult(scores)

    // 匹配人格类型
    const resultList = types.filter(t => t.code === resultKey)
    const result = resultList[0] || types[0]

    this.setData({
      result
    })
  },

  /**
   * 跳转分享页
   */
  goShare() {
    wx.navigateTo({
      url: '/pages/share/index?type=' + this.data.result.code
    })
  },

  /**
   * 重新测试
   */
  retryTest() {
    wx.redirectTo({
      url: '/pages/test/index'
    })
  }
})
