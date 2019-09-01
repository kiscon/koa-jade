const Koa = require('koa')
const path = require('path')
const koaViews = require('koa-views')
const koaStatic = require('koa-static')
const file = require('./src/routes/file')
const errHandler = require('./src/middleware/errHandler')
const app = new Koa()

// 加载模板引擎
app.use(koaViews(path.join(__dirname, './src/views'), {
	extension: 'jade'
}))

// 托管静态资源
app.use(koaStatic(path.join( __dirname,  './src/static')))

// 注册路由
app.use(file.routes(), file.allowedMethods())

// 错误中间件
errHandler(app)

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 指定端口号并启动服务器监听
let server = app.listen(3000, 'localhost', () => {
	let host = server.address().address
	let port = server.address().port
	console.log('server listening on port http://%s:%s', host, port)
})
