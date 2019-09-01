const handler = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    console.log(ctx)
    ctx.response.status = err.statusCode || err.status || 500
    ctx.response.type = 'html'
    ctx.response.body = '<p>Something wrong</p>'
    ctx.app.emit('error', err, ctx)
  }
}

const errHandler = app => {
  app.use(handler)
  app.on('error', err => {
    console.log(err)
  })
}

module.exports = errHandler