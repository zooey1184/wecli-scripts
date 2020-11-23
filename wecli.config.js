module.exports = {
  entry: {
    map: {
      name: 'wecli.map.json',
      useMap: true // false => 启用process.env.ENTRY
    },
    pages: ['demo', 'demo2'], // 入口文件 可以通过命令行 申明  wecli-script
    // 控制遍历层级
    deep: 1,
    // 入口基础路径
    baseUrl: './src/pages'
  }
}