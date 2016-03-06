
'use strict'

const _ = require('lodash')
const fs = require('fs')

const commands = _.reduce(fs.readdirSync(__dirname), (a, file) => {
  if (file !== 'index.js') a.push(require(`./${file}`))

  return a
}, [])

module.exports = commands
