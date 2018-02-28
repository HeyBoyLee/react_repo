var Koa = require('koa');
var Router = require('koa-router');
var serve = require('koa-static');
var path = require('path');

var port = 4000;
var app = new Koa();
var router = new Router();

app.use(serve(path.resolve(__dirname, './build')));

router.get('/api', (ctx, next) => {
  ctx.body = 'Hello Koa';
});


app.use(router.routes());
app.use(router.allowedMethods());

app.on('error', function(err, ctx){
  console.log(err);
});

app.listen(port);
console.log('listening on port:', port);