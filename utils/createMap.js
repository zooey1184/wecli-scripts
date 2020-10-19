const fs = require('fs-extra')
const os = require('os')

const root = process.cwd()

function createMap(map, name = 'wecli.map.json') {
  const t = map || JSON.parse(process.env.ENTRY)
  if (name.match(/\.json$/)) {
    fs.writeFileSync(`${root}/${name}`, JSON.stringify(t, null, 2) + os.EOL);
  } else if (name.match(/\.js$/)) {
    const _map = JSON.stringify(t, null, 2)
    const _t = `module.exports = ${_map}`
    fs.writeFileSync(`${root}/${name}`, _t + os.EOL);
  }
}

module.exports = createMap
