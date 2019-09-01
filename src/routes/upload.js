const os = require('os')
const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
const router = new Router()

router.post('/upload', async (ctx) => {
	const tmpdir = os.tmpdir()
	const filePaths = []
	const files = ctx.request.files || {}
  for (let key in files) {
    const file = files[key]
    const filePath = path.join(tmpdir, file.name)
    const reader = fs.createReadStream(file.path)
    const writer = fs.createWriteStream(filePath)
    reader.pipe(writer)
    filePaths.push(filePath)
  }
	//   console.log('xxxxxxxx', filePaths)
  ctx.body = filePaths
})

module.exports = router
