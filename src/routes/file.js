const Router = require('koa-router')
const readFileListByPath = require('../util/file')
const router = new Router()

router.get('/', async ( ctx ) => {
	let dataList = await readFileListByPath('./')
	// console.log(dataList)
	await ctx.render('file', {
		title: 'Hello koa2',
		list : dataList
	})
})

module.exports = router