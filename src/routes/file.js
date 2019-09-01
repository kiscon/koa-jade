const Router = require('koa-router')
const router = new Router()
const readFileListByPath = require('../controller/file')

// router.prefix('/')

router.get('/', async (ctx) => {
	let dataList = await readFileListByPath('./')
	// console.log(dataList)
	await ctx.render('file', {
		title: 'koa2-file',
		list : dataList
	})
})

router.get('/err', async (ctx) => {
	// ctx.throw(500)
	ctx.response.type = 'html'
	ctx.response.body = '<p>Something wrong</p>'
})

module.exports = router