Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

## node安装

## mac homebrew
- brew install node

> 安装后重新启动CMD命令行，NVM for mac(node的版本管理工具),window可以使用nvm-win


## 配置环境变量的过程
- add to path
- 我的电脑 -> 属性 -> 高级系统设置 -> 环境变量（Path）

## 用node运行一个js文件
- 控制台中运行文件
```
node 文件名
```
- 在编辑器中使用Node（vscode，sublime，webstorm）

## node js
- 主线程是单线程（异步）callback,将后续的逻辑携程函数，传入当前执行的函数中，当执行的函数得到了结果后，执行传入的函数（回调函数）
- event-driven 事件驱动(发布订阅)

## web异步
- setTimeout
- callback  （主要）
- onclick
- ajax

> 在文件中打印this不是global属性，node自带模块化功能，一个js文件就是一个模块，模块this不是global,每个文件都有局部作用域，不会将属性挂载到global上

## 全局对象
- console/process(进程)/Buffer(缓存区)/clearImmediate setImmediate/clearTimeout

## process 进程 设置环境变量
- 在命令行里配置NODE_ENV,mac export/window set