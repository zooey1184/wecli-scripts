### 说明
简单使用
```sh
wecli-scripts start -- p=a,b  e=dev
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
      useMap: true // false => 启用process.env.ENTRY  默认false
    },
    // pages: ['demo', 'demo2'], // 入口文件
    // 控制遍历层级
    // deep: 1, // 例如 demo deep=3 会遍历demo文件夹内部深层文件夹3层 用于手动优化
    // 入口基础路径 default 
    // baseUrl: './src/pages',
    // useLobal: true, // 是否使用本地map文件作为入口 如果没有则遍历(如果命令行带p参数则创建，如果本地配置entry有pages字段 则创建)
  }
}
```


```sh
# 例子
"script": {
  "start": "wecli-scripts start"
}

npm run start -- p=demo,demo2 e=daily
npm run build -- p=demo --report
```

#### 参数
命令行后加 -- 后面加参数  --与参数间有个空格
npm run xxx -- p
|    参数       |                 解释                  |
|--------------|--------------------------------------|
|  p=xx,yy     |              入口文件                  |
|  e=xx        |                 环境                  |  
|  baseUrl     |            入口文件baseUrl             |
|  deep        |               遍历层级                 |  
|  useMap      |  使用map创建入口文件，默认process.env.ENTRY 获取  |
|  useLocal    |         使用本地的入口文件配置           |
| --report     |        build 的时候分析生成HTML         |

> 其他的同vue-cli3的参数