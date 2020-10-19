### 说明
简单使用
```sh
wecli-scripts start -p a,b -e gray
# --p=a,b || -p a,b => pages入口文件的名称
# --e=gray || -e online => env 环境
```

### 命令
1. build => npm run build
2. start => npm run start
3. XXX 同 Vue cli3 其他命令 => vue-cli-service XXX

### 配置 (非必须)
wecli.config.js

```js
module.exports = {
  // 入口文件的配置 生成入口配置
  entry: {
    map: {
      name: 'wecli.map.js',
      useMap: true // false => 启用process.env.ENTRY
    }
  }
}
```