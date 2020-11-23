const log = require('@zooey1184/log')
// function env() {
//   console.log('============', process.env.ENTRY);
// }

// env()


log('helo', 'world')
log.success('helo', 'world')
log.tip('helo', 'world')
log.error('helo', 'world')
log.success('helo {{hello }}world')
log.bad = '#d43f33'
log.bad('hello')