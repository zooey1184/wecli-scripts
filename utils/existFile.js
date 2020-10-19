  
const fs = require('fs-extra');
const path = require('path')
const rootPath = process.cwd()
const getPath = p => path.resolve(rootPath, p)
/**
 * 判断是否存在文件
 * @param {*} path 绝对路径
 */
const existFile = (path) => {
  try {
    fs.accessSync(getPath(path), fs.F_OK);
  } catch (e) {
    return false;
  }
  return true;
}

module.exports = existFile