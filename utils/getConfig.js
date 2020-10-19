const path = require('path')
const root = process.cwd()
const exist = require('./existFile')

let config = {entry: {}}
if (exist('./wecli.config.js')) {
  const CONFIG = require(path.resolve(root, './wecli.config.js'))
  config.entry = CONFIG.entry || {}
}

module.exports = config