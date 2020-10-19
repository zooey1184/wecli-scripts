const path = require('path')
const log = require('@zooey1184/log')
const existFile = require('./existFile')
const folderFiles = require('./getDir')

const rootPath = process.cwd()
const getPath = p => path.resolve(rootPath, p)

/**
 * 
 * @param {*} props string[] 入口
 * @param {*} baseUrl string 前缀 './src/pages'
 * @param {*} count 遍历到几层   因为层数太多 会影响性能，所以控制
 * @param {*} list [] 入口基数
 */
const getEntry = (props, baseUrl, count=3, list=[], headUrl) => {
  const entryList = list
  const hurl = headUrl || baseUrl
  if (count-- > 0) {
    console.log(props);
    if (props && Object.prototype.toString.call(props) === '[object Array]') {
      props.forEach((item) => {
        const itemPath = getPath(`${baseUrl}/${item}/main.js`)
        if (existFile(`${baseUrl}/${item}/main.js`)) {
          const ref = new RegExp(getPath(`${hurl}`))
          const fileName = getPath(`${baseUrl}/${item}/index.html`).replace(ref, '')
          const obj = {
            entry: itemPath,
            filename: fileName.replace(/^\//, '')
          }
          if(existFile(`${baseUrl}/${item}/index.html`)) {
            obj.template = getPath(`${baseUrl}/${item}/index.html`)
          }
          entryList.push(obj)
        } else {
          try {
            const folds = folderFiles(`${baseUrl}/${item}`)
            if (folds && folds.length) {
              getEntry(folds, `${baseUrl}/${item}`, count, entryList, hurl)
            }
          } catch (e) {
            console.log('\n');
            log.error('error', `{{${baseUrl}/${item}}} 这个文件或文件夹不存在入口文件\n\n`);
          }
        }
      });
    } else {
      if (existFile(`${baseUrl}/main.js`)) {
        return {
          main: getPath(`${baseUrl}/main.js`)
        }
      } else {
        console.error('缺少入口文件')
        process.exit()
      }
    }
  }
  return entryList
}


module.exports = getEntry