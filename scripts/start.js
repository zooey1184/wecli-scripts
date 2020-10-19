
// const inquirer = require('inquirer')
const spawn = require('cross-spawn')
const getDir = require('../utils/getDir')
const baseURL = './src/pages'
const entryMap = require('../utils/getEntry')
const createMap = require('../utils/createMap')
const CONFIG = require('../utils/getConfig')

class Serve {
  constructor(params = {}) {
    const entry = CONFIG.entry
    this.entry = entry
    this.env = params.e || 'daily'
    this.pages = params.p || entry.pages || getDir(baseURL)
    this.baseUrl = entry.baseUrl || baseURL
    this._createMap = entry.map && entry.map.useMap
    this.deep = entry.deep || 3
    this.entryMap = {}
  }
  cli(name, envEntryMap) {
    const [c, ...o] = name.split(' ').filter(item => !!item)
    spawn.sync(c, o, { 
      stdio: 'inherit', 
      env: Object.assign({}, process.env, envEntryMap) 
    });
  }
  start() {
    this.entryMap = this.createEntryMap()
    let envEntryMap = {}
    if (this._createMap) {
      const mapName = this.entry.map && this.entry.map.name ? this.entry.map.name : 'wecli.map.json'
      createMap(this.entryMap, mapName)
    } else {
      envEntryMap = { ENTRY: JSON.stringify(this.entryMap) }
    }
    return envEntryMap
  }
  createEntryMap() {
    const [main, ...list] = entryMap(this.pages, this.baseUrl, this.deep, [])
    const obj = {
      main: main
    }
    if (list && list.length) {
      for (const i in list) {
        const name = list[i].filename.replace(/\/index.html/, '')
        obj[name] = list[i]
      }
    }
    return obj
  }
}

module.exports = Serve