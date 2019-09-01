const file = require('./file')
const upload = require('./upload')

const indexSev = app => {
  app.use(file.routes(), file.allowedMethods())
  app.use(upload.routes(), upload.allowedMethods())
}

module.exports = indexSev