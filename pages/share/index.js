// pages/share/index.js
const types = require('../../data/types.js')

Page({
  data: {
    type: '',
    result: {},
    canvasWidth: 750,
    canvasHeight: 1334,
    imageUrl: ''
  },

  onLoad(options) {
    const type = options.type
    const result = types.find(t => t.code === type) || types[0]

    this.setData({
      type,
      result
    })

    // 生成图片
    this.generateImage()
  },

  async generateImage() {
    wx.showLoading({ title: '生成中...' })

    try {
      const query = wx.createSelectorQuery()
      query.select('#shareCanvas')
        .fields({ node: true, size: true })
        .exec(async (res) => {
          if (!res[0]) {
            wx.hideLoading()
            return
          }

          const canvas = res[0].node
          const ctx = canvas.getContext('2d')

          const dpr = wx.getSystemInfoSync().pixelRatio
          canvas.width = this.data.canvasWidth * dpr
          canvas.height = this.data.canvasHeight * dpr
          ctx.scale(dpr, dpr)

          // 先绘制内容
          this.drawCanvas(ctx)

          // 加载并绘制小程序码
          await this.drawQRCode(ctx, canvas)

          wx.canvasToTempFilePath({
            canvas: canvas,
            success: (res) => {
              wx.hideLoading()
              this.setData({ imageUrl: res.tempFilePath })
            },
            fail: (err) => {
              wx.hideLoading()
              wx.showToast({ title: '生成失败', icon: 'none' })
            }
          })
        })
    } catch (err) {
      wx.hideLoading()
      wx.showToast({ title: '生成失败', icon: 'none' })
    }
  },

  drawCanvas(ctx) {
    const width = this.data.canvasWidth
    const height = this.data.canvasHeight
    const result = this.data.result

    // 背景
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, width, height)

    // 顶部色块
    const gradient = ctx.createLinearGradient(0, 0, width, 0)
    gradient.addColorStop(0, result.color)
    gradient.addColorStop(1, this.adjustColor(result.color, -20))
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, 380)

    // emoji
    ctx.font = '100px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(result.emoji, width / 2, 120)

    // 类型标签
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
    ctx.font = '28px sans-serif'
    ctx.fillText(result.code.toUpperCase(), width / 2, 190)

    // 人格名称
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 64px sans-serif'
    ctx.fillText(result.name, width / 2, 270)

    // 特质
    ctx.font = '24px sans-serif'
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
    ctx.fillText(result.traits, width / 2, 330)

    // 分割线
    ctx.strokeStyle = '#e5e7eb'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(60, 420)
    ctx.lineTo(width - 60, 420)
    ctx.stroke()

    // MBTI标签
    const mbtiY = 480
    ctx.fillStyle = '#eff6ff'
    ctx.fillRect(width / 2 - 120, mbtiY - 30, 240, 60)
    ctx.fillStyle = '#3b82f6'
    ctx.font = 'bold 32px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(result.mbti, width / 2, mbtiY + 12)

    // 描述标题
    let y = 580
    ctx.fillStyle = '#1f2937'
    ctx.font = 'bold 32px sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText('人格描述', 60, y)

    // 描述内容
    y += 50
    ctx.fillStyle = '#6b7280'
    ctx.font = '28px sans-serif'
    const descLines = this.wrapText(ctx, result.desc, width - 120)
    descLines.forEach(line => {
      ctx.fillText(line, 60, y)
      y += 44
    })

    // 标签
    y += 40
    ctx.fillStyle = '#1f2937'
    ctx.font = 'bold 32px sans-serif'
    ctx.fillText('关键词', 60, y)

    y += 50
    ctx.fillStyle = '#6b7280'
    ctx.font = '26px sans-serif'
    const tagText = result.tags.map(t => '#' + t).join(' · ')
    ctx.fillText(tagText, 60, y)

    // 底部分享语（调整位置，为小程序码留空间）
    ctx.fillStyle = '#f3f4f6'
    ctx.fillRect(60, height - 320, width - 280, 100)

    ctx.fillStyle = '#92400e'
    ctx.font = 'italic 28px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('"' + result.share + '"', (width - 280) / 2 + 60, height - 260)

    // 底部文字（左下角）
    ctx.fillStyle = '#9ca3af'
    ctx.font = '20px sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText('SBTI人格测试', 60, height - 40)
  },

  adjustColor(color, amount) {
    const hex = color.replace('#', '')
    const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + amount))
    const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + amount))
    const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + amount))
    return `rgb(${r}, ${g}, ${b})`
  },

  wrapText(ctx, text, maxWidth) {
    const chars = text.split('')
    const lines = []
    let line = ''

    for (let char of chars) {
      const testLine = line + char
      const metrics = ctx.measureText(testLine)
      if (metrics.width > maxWidth && line) {
        lines.push(line)
        line = char
      } else {
        line = testLine
      }
    }
    lines.push(line)
    return lines
  },

  async drawQRCode(ctx, canvas) {
    const width = this.data.canvasWidth
    const height = this.data.canvasHeight

    // 二维码位置和大小
    const qrSize = 200
    const qrX = width - qrSize - 40
    const qrY = height - qrSize - 40

    // 绘制白色背景
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(qrX - 10, qrY - 10, qrSize + 20, qrSize + 20)

    // 绘制二维码边框
    ctx.strokeStyle = '#e5e7eb'
    ctx.lineWidth = 2
    ctx.strokeRect(qrX - 10, qrY - 10, qrSize + 20, qrSize + 20)

    // 创建一个简单的二维码占位图
    return new Promise((resolve) => {
      const img = canvas.createImage()

      // 使用在线二维码API生成测试二维码
      // 实际使用时需要替换为真实的小程序码
      img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=SBTI人格测试'

      img.onload = () => {
        ctx.drawImage(img, qrX, qrY, qrSize, qrSize)

        // 绘制提示文字
        ctx.fillStyle = '#6b7280'
        ctx.font = '20px sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText('扫码测测你的人格', qrX + qrSize / 2, qrY + qrSize + 40)

        resolve()
      }

      img.onerror = () => {
        // 如果图片加载失败，绘制一个占位框
        ctx.fillStyle = '#f3f4f6'
        ctx.fillRect(qrX, qrY, qrSize, qrSize)

        ctx.fillStyle = '#9ca3af'
        ctx.font = '24px sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText('小程序码', qrX + qrSize / 2, qrY + qrSize / 2)

        ctx.fillStyle = '#6b7280'
        ctx.font = '20px sans-serif'
        ctx.fillText('扫码测测你的人格', qrX + qrSize / 2, qrY + qrSize + 40)

        resolve()
      }
    })
  },

  saveImage() {
    if (!this.data.imageUrl) return

    wx.saveImageToPhotosAlbum({
      filePath: this.data.imageUrl,
      success: () => {
        wx.showToast({ title: '已保存', icon: 'success' })
      },
      fail: () => {
        wx.showModal({
          title: '提示',
          content: '需要授权保存相册',
          success: (res) => {
            if (res.confirm) {
              wx.openSetting()
            }
          }
        })
      }
    })
  },

  goBack() {
    wx.navigateBack()
  }
})
