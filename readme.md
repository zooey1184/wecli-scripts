### 说明
简单使用
```sh
wecli-scripts start -p a,b -e gray
# -- p=a,b pages入口文件的名称
# -- e=gray env 环境
```

### 命令
XXX 同 Vue cli3 其他命令 => vue-cli-service XXX

### 配置 (非必须)
wecli.config.js

```js
module.exports = {
  // 入口文件的配置 生成入口配置
  entry: {
    map: {
      name: 'wecli.map.js',
      useMap: true // false => 启用process.env.ENTRY
    },
    pages: ['demo', 'demo2'], // 入口文件
    // 控制遍历层级
    deep: 1, // 例如 demo deep=3 会遍历demo文件夹内部深层文件夹3层 用于手动优化
    // 入口基础路径 default 
    baseUrl: './src/pages'
  }
}
```


```sh
# 例子
"script": {
  "start": "wecli-scripts start"
}

npm run start -- p=demo,demo2 e=daily

```