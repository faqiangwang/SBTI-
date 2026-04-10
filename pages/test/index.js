// pages/test/index.js
const questions = require('../../data/questions.js')

Page({
  data: {
    currentIndex: 0,
    questions: [],
    scores: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      questions: questions
    })
  },

  /**
   * 选择答案
   */
  selectOption(e) {
    const option = e.currentTarget.dataset.option
    let scores = this.data.scores

    // 累加各维度得分
    for (let key in option.score) {
      scores[key] = (scores[key] || 0) + option.score[key]
    }

    // 判断是否还有下一题
    let nextIndex = this.data.currentIndex + 1

    if (nextIndex >= this.data.questions.length) {
      // 最后一题，跳转到结果页
      wx.navigateTo({
        url: '/pages/result/index?scores=' + JSON.stringify(scores)
      })
    } else {
      // 下一题
      this.setData({
        currentIndex: nextIndex,
        scores
      })
    }
  }
})
