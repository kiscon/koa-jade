const Koa = require('koa')
const path = require('path')
const Router = require('koa-router')
const koaViews = require('koa-views')
const koaStatic = require('koa-static')
const file = require('./src/routes/file')

const app = new Koa()
const router = new Router()

// 加载模板引擎
app.use(koaViews(path.join(__dirname, './src/views'), {
	extension: 'jade'
}))
// 托管静态资源
app.use(koaStatic(path.join( __dirname,  './src/static')))

// 注册路由
router.use('/', file.routes(), file.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())

// 指定端口号并启动服务器监听
let server = app.listen(3000, 'localhost', () => {
	let host = server.address().address
	let port = server.address().port
	console.log('Express server listening on port http://%s:%s', host, port)
})

