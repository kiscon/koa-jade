# koa-jade

## Project setup
```
yarn install
```

### 启动
```
node app.js
```

### Koa
Koa -- 基于 Node.js 平台的下一代 web 开发框架

### koa2中间件
- express中间件是异步回调，koa2原生支持async/await
  
### async/await要点
- await后面可以追缴promise对象，获取resolve的值
- await必须包裹在async函数里面
- async函数执行返回的也是一个promise对象
- try-catch截获promise中reject的值

### Koa2的Context对象
- Context将节点的请求和响应对象封装到单个对象中，该对象为编写Web应用程序和API提供了许多有用的方法。

### 中间件分析
- app.use 用来注册中间件，先收集起来
- 实现next机制，即上一个通过next触发下一个
- 不涉及method和path的判断
- 
### 参考学习资料
https://chenshenhai.github.io/koa2-note/




