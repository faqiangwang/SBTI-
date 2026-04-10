// utils/system.js
const systemInfo = wx.getSystemInfoSync()

// 计算导航栏总高度
const getNavBarHeight = () => {
  // 状态栏高度
  const statusBarHeight = systemInfo.statusBarHeight || 20
  // 导航栏内容高度（微信小程序默认44px）
  const navBarHeight = 44
  // 总高度（单位：px）
  const totalHeight = statusBarHeight + navBarHeight
  // 转换为rpx（假设设计稿宽度750px，屏幕宽度375px，比例2:1）
  return totalHeight * 2 + 40 // 额外加40rpx的安全间距
}

// 导出状态栏高度（px）
const statusBarHeight = systemInfo.statusBarHeight || 20

module.exports = {
  getNavBarHeight,
  statusBarHeight
}
