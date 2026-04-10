// data/types.js
const dead = require('./types/dead')
const worker = require('./types/worker')
const anxious = require('./types/anxious')
const chill = require('./types/chill')
const cynic = require('./types/cynic')
const social = require('./types/social')
const indecisive = require('./types/indecisive')
const error = require('./types/error')

module.exports = dead.concat(worker).concat(anxious).concat(chill).concat(cynic).concat(social).concat(indecisive).concat(error)
