# travelvue

> A Vue.js project 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 开发进程

# 框架
## 单文件组件与Vue中的路由
## 单页应用VS多页应用
### 多页面
- 每次后台都给返回一个html
- 页面切换比较慢
- 首页快
### 单页面
- 每次后台只返回路由
- 渲染由Vue来做，节省了很多http请求
- 首屏时间会稍微慢一点，SEO差
- 搜索引擎优化效果比较差
## 路由实现的原理
- 后端路由的实现原理
- Browser History 的实现原理
- Hash History 的实现原理
- 前端路由和后端路由的区别？
- 多页应用和单页应用的优势是什么？
- 前端路由有哪些？实现原理是什么？
- 后端路由的实现原理是什么？
- 你现在开发的项目，使用的是怎么样的路由方式？有没有遇到什么问题？

# 首页Header区域的开发
## UI分析
- iPhone6 2x设计稿
- 顶部搜索栏

## 安装CSS依赖包
- npm install stylus --save 
- npm install stylus-loader --save 
- npm run start 

## Stylus等CSS布局的使用
- 引入Stylus布局框架

## 浏览器布局兼容问题修复
- src/assets下引入styles文件夹
- webpack.base.conf.js配置
- main.js引入border.css、reset.css文件

## iconfont的使用和代码优化
- src/styles下创建iconfont文件夹，把从网络上下载的字体文件放进去
- 把iconfont.css文件放在styles文件夹下面
- main.js引入inconfont.css文件
- 在需要写入icon的地方，直接复制网站的代码到标签里即可

### 代码优化
- 把整个项目中的关于颜色色值的代码统一放置的合适的位置
- 代码里面直接调用即可
- 长目录寻找，直接在webpack.base.conf.js里面创建文件夹别名即可