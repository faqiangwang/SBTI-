// data/questions.js
module.exports = [
  {
    id: 1,
    title: "闹钟响了，你的第一反应是？",
    options: [
      { text: "关掉继续睡", score: { dead: 2, lazy: 2, sleepy: 2 } },
      { text: "立刻起床", score: { worker: 2, responsible: 2 } },
      { text: "开始想今天要不要请假", score: { anxious: 2, overthink: 2 } },
      { text: "再赖5分钟", score: { chill: 2, relaxed: 2, procrastinator: 1 } },
      { text: "思考为什么要上班", score: { cynic: 2, rebel: 2 } }
    ]
  },
  {
    id: 2,
    title: "领导突然发消息：在吗？",
    options: [
      { text: "假装没看到", score: { lazy: 2, giverup: 2 } },
      { text: "秒回：在的！", score: { worker: 2, helper: 2 } },
      { text: "开始紧张脑补", score: { anxious: 2, fragile: 2, overthink: 2 } },
      { text: "慢慢回", score: { chill: 2, calm: 2 } },
      { text: "已读不回", score: { cynic: 2, detached: 2 } }
    ]
  },
  {
    id: 3,
    title: "朋友找你帮忙，你其实不想帮，你会？",
    options: [
      { text: "直接拒绝", score: { detached: 2, cynic: 1 } },
      { text: "还是答应了", score: { giver: 2, sacrifice: 2 } },
      { text: "纠结很久", score: { indecisive: 2, hesitant: 2, conflicted: 2 } },
      { text: "看心情", score: { relaxed: 2, emotional: 2 } },
      { text: "装傻充愣", score: { lazy: 2, sleepy: 1 } }
    ]
  },
  {
    id: 4,
    title: "周末终于到了，你会？",
    options: [
      { text: "一直躺着", score: { lazy: 2, sleepy: 2, dead: 2 } },
      { text: "安排满行程", score: { worker: 2, responsible: 2 } },
      { text: "想做很多但没做", score: { procrastinator: 2, overthink: 2 } },
      { text: "随便过", score: { chill: 2, carefree: 2, relaxed: 2 } },
      { text: "思考周末的意义", score: { cynic: 2, detached: 2 } }
    ]
  },
  {
    id: 5,
    title: "看到别人比你优秀，你会？",
    options: [
      { text: "无感", score: { dead: 2, lazy: 2 } },
      { text: "努力追赶", score: { worker: 2, responsible: 2 } },
      { text: "开始自我怀疑", score: { anxious: 2, fragile: 2, overthink: 2 } },
      { text: "觉得还好", score: { chill: 2, calm: 2, carefree: 2 } },
      { text: "那是资本的PUA", score: { cynic: 2, rebel: 2 } }
    ]
  },
  {
    id: 6,
    title: "点外卖时你会？",
    options: [
      { text: "随便点一个", score: { lazy: 2, giverup: 1 } },
      { text: "认真对比评分", score: { responsible: 2, overthink: 1 } },
      { text: "纠结很久选不出来", score: { indecisive: 2, hesitant: 2 } },
      { text: "点常吃的", score: { chill: 2, carefree: 2 } },
      { text: "不点了，省钱", score: { cynic: 2, detached: 2 } }
    ]
  },
  {
    id: 7,
    title: "有人对你不太友好，你会？",
    options: [
      { text: "直接回怼", score: { rebel: 2, sarcasm: 2 } },
      { text: "忍了", score: { giver: 2, sacrifice: 1 } },
      { text: "回去一直想", score: { overthink: 2, fragile: 2, anxious: 1 } },
      { text: "无所谓", score: { chill: 2, calm: 2, detached: 1 } },
      { text: "嘲笑他太较真", score: { cynic: 2, sarcasm: 1 } }
    ]
  },
  {
    id: 8,
    title: "计划好的事情被打乱，你会？",
    options: [
      { text: "直接摆烂", score: { dead: 2, giverup: 2 } },
      { text: "重新安排", score: { worker: 2, responsible: 2 } },
      { text: "开始烦躁", score: { anxious: 2, emotional: 2 } },
      { text: "顺其自然", score: { chill: 2, carefree: 2, calm: 2 } },
      { text: "这就是命", score: { cynic: 2, detached: 2 } }
    ]
  },
  {
    id: 9,
    title: "突然要当众发言，你会？",
    options: [
      { text: "随便说两句", score: { carefree: 2, relaxed: 2, easygoing: 2 } },
      { text: "认真准备", score: { responsible: 2, worker: 2 } },
      { text: "紧张到不行", score: { socialphobia: 2, awkward: 2, anxious: 1 } },
      { text: "还可以接受", score: { chill: 2, calm: 2 } },
      { text: "直接摆烂说不知道", score: { rebel: 2, cynic: 2 } }
    ]
  },
  {
    id: 10,
    title: "看到未读消息很多，你会？",
    options: [
      { text: "懒得回", score: { lazy: 2, giverup: 2, loner: 1 } },
      { text: "全部回复", score: { helper: 2, responsible: 2 } },
      { text: "不知道先回谁", score: { indecisive: 2, hesitant: 2, overthink: 1 } },
      { text: "慢慢回", score: { chill: 2, carefree: 2 } },
      { text: "怀疑自己是不是社死了", score: { socialphobia: 2, loner: 2, overthink: 1 } }
    ]
  },
  {
    id: 11,
    title: "下班后你最想做什么？",
    options: [
      { text: "什么都不做", score: { lazy: 2, sleepy: 2, dead: 1 } },
      { text: "学习提升", score: { worker: 2, responsible: 2 } },
      { text: "想放松又焦虑", score: { anxious: 2, overthink: 2, conflicted: 1 } },
      { text: "看点轻松内容", score: { relaxed: 2, carefree: 2 } },
      { text: "思考工作的意义", score: { cynic: 2, detached: 2 } }
    ]
  },
  {
    id: 12,
    title: "朋友聚会你通常？",
    options: [
      { text: "能不去就不去", score: { loner: 2, socialphobia: 2, introvert: 1 } },
      { text: "基本都会参加", score: { helper: 2, easygoing: 2 } },
      { text: "去之前很纠结", score: { indecisive: 2, hesitant: 2, conflicted: 2 } },
      { text: "看情况", score: { carefree: 2, easygoing: 2 } },
      { text: "去了也只是玩手机", score: { cynic: 2, detached: 2, loner: 1 } }
    ]
  },
  {
    id: 13,
    title: "做错一件事后你会？",
    options: [
      { text: "算了无所谓", score: { carefree: 2, chill: 2, giverup: 1 } },
      { text: "马上补救", score: { responsible: 2, worker: 2 } },
      { text: "反复想", score: { overthink: 2, anxious: 2, conflicted: 2 } },
      { text: "简单处理", score: { chill: 2, calm: 2 } },
      { text: "都是系统的错", score: { rebel: 2, cynic: 2 } }
    ]
  },
  {
    id: 14,
    title: "看到别人发朋友圈很精彩，你会？",
    options: [
      { text: "划过去", score: { dead: 2, lazy: 2 } },
      { text: "点赞评论", score: { helper: 2, easygoing: 2 } },
      { text: "对比自己", score: { overthink: 2, anxious: 2, fragile: 1 } },
      { text: "偶尔看看", score: { carefree: 2, chill: 2 } },
      { text: "都是精心包装的人设", score: { cynic: 2, rebel: 2, critical: 1 } }
    ]
  },
  {
    id: 15,
    title: "你对未来的感觉是？",
    options: [
      { text: "随便吧", score: { lazy: 2, giverup: 2, dead: 1 } },
      { text: "有规划", score: { worker: 2, responsible: 2 } },
      { text: "有点迷茫", score: { anxious: 2, fragile: 2 } },
      { text: "走一步看一步", score: { chill: 2, carefree: 2 } },
      { text: "未来是不确定的", score: { cynic: 2, detached: 2 } }
    ]
  },
  {
    id: 16,
    title: "临时加班，你会？",
    options: [
      { text: "直接摆烂", score: { dead: 2, giverup: 2 } },
      { text: "接受安排", score: { worker: 2, responsible: 2 } },
      { text: "情绪低落", score: { anxious: 2, emotional: 2, fragile: 1 } },
      { text: "能接受", score: { carefree: 2, calm: 2 } },
      { text: "思考资本剥削", score: { rebel: 2, cynic: 2 } }
    ]
  },
  {
    id: 17,
    title: "有人误解你，你会？",
    options: [
      { text: "懒得解释", score: { lazy: 2, loner: 2, detached: 2 } },
      { text: "耐心解释", score: { helper: 2, giver: 2 } },
      { text: "一直在想", score: { overthink: 2, anxious: 2, conflicted: 2 } },
      { text: "看情况解释", score: { chill: 2, easygoing: 2 } },
      { text: "误解就误解吧", score: { cynic: 2, detached: 2, calm: 1 } }
    ]
  },
  {
    id: 18,
    title: "面对deadline，你会？",
    options: [
      { text: "爱咋咋地", score: { dead: 2, giverup: 2 } },
      { text: "提前完成", score: { worker: 2, responsible: 2 } },
      { text: "焦虑到失眠", score: { anxious: 2, overthink: 2, fragile: 1 } },
      { text: "尽力而为", score: { carefree: 2, chill: 2 } },
      { text: "思考为什么要有deadline", score: { rebel: 2, cynic: 2 } }
    ]
  },
  {
    id: 19,
    title: "发现自己在意的人没回消息，你会？",
    options: [
      { text: "无所谓", score: { carefree: 2, chill: 2, detached: 1 } },
      { text: "担心出事", score: { anxious: 2, fragile: 2, emotional: 2 } },
      { text: "胡思乱想", score: { overthink: 2, conflicted: 2, indecisive: 1 } },
      { text: "等等再看", score: { chill: 2, calm: 2 } },
      { text: "算了，我也不重要", score: { loner: 2, cynic: 2, fragile: 1 } }
    ]
  },
  {
    id: 20,
    title: "如果可以重来，你会？",
    options: [
      { text: "算了懒得", score: { lazy: 2, giverup: 2 } },
      { text: "更加努力", score: { worker: 2, responsible: 2 } },
      { text: "担心重蹈覆辙", score: { anxious: 2, overthink: 2, hesitant: 1 } },
      { text: "顺其自然", score: { chill: 2, carefree: 2 } },
      { text: "重来又有什么意义", score: { cynic: 2, detached: 2 } }
    ]
  },
  {
    id: 21,
    title: "老板说：年轻人要多吃苦",
    options: [
      { text: "啊？", score: { sleepy: 2, lazy: 1 } },
      { text: "好的老板", score: { worker: 2, giver: 1 } },
      { text: "心里一紧", score: { anxious: 2, fragile: 2 } },
      { text: "假装在听", score: { detached: 2, giverup: 1 } },
      { text: "您先吃", score: { sarcasm: 2, rebel: 2 } }
    ]
  },
  {
    id: 22,
    title: "同事问你今天周几",
    options: [
      { text: "周几？", score: { sleepy: 2, dead: 1 } },
      { text: "马上回答", score: { worker: 2, responsible: 2 } },
      { text: "怕答错", score: { awkward: 2, anxious: 2, fragile: 1 } },
      { text: "查一下日历", score: { hesitant: 2, indecisive: 1 } },
      { text: "每天都一样", score: { cynic: 2, rebel: 2 } }
    ]
  },
  {
    id: 23,
    title: "双十一到了，你会？",
    options: [
      { text: "买买买", score: { emotional: 2, relaxed: 1 } },
      { text: "理性消费", score: { critical: 2, calm: 2 } },
      { text: "纠结买啥", score: { indecisive: 2, hesitant: 2, conflicted: 2 } },
      { text: "需要就买", score: { carefree: 2, chill: 2 } },
      { text: "消费主义陷阱", score: { rebel: 2, cynic: 2, critical: 1 } }
    ]
  },
  {
    id: 24,
    title: "看到网上的励志语录",
    options: [
      { text: "啥意思？", score: { sleepy: 2, dead: 1 } },
      { text: "很受激励", score: { worker: 2, carefree: 1 } },
      { text: "觉得做不到", score: { anxious: 2, fragile: 2 } },
      { text: "看看而已", score: { carefree: 2, chill: 2 } },
      { text: "鸡汤而已", score: { cynic: 2, critical: 2 } }
    ]
  },
  {
    id: 25,
    title: "朋友问你在干嘛",
    options: [
      { text: "在吗", score: { sleepy: 2, lazy: 1 } },
      { text: "详细汇报", score: { helper: 2, responsible: 2 } },
      { text: "怕打扰人", score: { socialphobia: 2, introvert: 2, fragile: 1 } },
      { text: "没干嘛", score: { chill: 2, carefree: 2 } },
      { text: "在呼吸", score: { sarcasm: 2, cynic: 2 } }
    ]
  }
]
