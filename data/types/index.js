// data/types/index.js
const dead = require('./dead')
const worker = require('./worker')
const anxious = require('./anxious')
const chill = require('./chill')
const cynic = require('./cynic')
const giver = require('./giver')
const imsb = require('./imsb')
const social = require('./social')
const indecisive = require('./indecisive')
const error = require('./error')

module.exports = [
  ...dead,
  ...worker,
  ...anxious,
  ...chill,
  ...cynic,
  ...giver,
  ...imsb,
  ...social,
  ...indecisive,
  ...error
]
