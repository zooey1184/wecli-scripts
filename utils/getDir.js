const fs = require('fs-extra')
const path = require('path')
const rootPath = process.cwd()
const getPath = p => path.resolve(rootPath, p)

const folderFiles = (p) => {
  let arr = fs.readdirSync(getPath(p), function (err, files) {
    if (err) {
      console.log(err);
    }
    return files
  })
  return arr
}

module.exports = folderFiles