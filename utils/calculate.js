// utils/calculate.js

/**
 * 计算测试结果
 * @param {Object} scores - 各维度得分
 * @returns {String} - 人格类型代码
 */
function calculateResult(scores) {
  // 找出得分最高的类型
  let maxScore = 0
  let resultType = 'dead'
  const types = Object.keys(scores)

  for (let type of types) {
    if (scores[type] > maxScore) {
      maxScore = scores[type]
      resultType = type
    }
  }

  // 彩蛋触发机制
  const random = Math.random()

  // 如果所有分数都很低，可能触发404
  if (maxScore <= 4 && random < 0.3) {
    return '404'
  }

  // 如果分数很平均，可能触发随机人
  const scoreValues = Object.values(scores)
  const avg = scoreValues.reduce((a, b) => a + b, 0) / scoreValues.length
  const variance = scoreValues.reduce((sum, val) => sum + Math.pow(val - avg, 2), 0) / scoreValues.length

  if (variance < 2 && random < 0.2) {
    return 'rndm'
  }

  return resultType
}

module.exports = {
  calculateResult
}
