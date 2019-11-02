const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = new Router();

// s1 默认
// app.use(async (ctx, next) => {
//   const { url, method } = ctx;
//   if (url === '/404' && method === 'GET') {
//     ctx.body = 'Page is not found';
//     ctx.status = 404;
//   } else {
//     ctx.body = 'Default body';
//   }
//   await next();
// })
// app.listen(4000, () => {
//   console.log('run in 4000');
// });

// s2 router
app.get('/', async (ctx, next) => {
  ctx.body = 'hello world';
  await next();
})
.post('/users', async(ctx, next) => {
  console.log('增加新的用户');
})
.put('/users/:id', async(ctx, next) => {
  console.log('修改参数id对应的数据');
})
.del('users/:id', async(ctx, next) => {
  console.log('删除参数id对应的数据');
})
.all('users/:id', async(ctx, next) => {
  // 
  console.log('everyThing');
});

app.use(router.routes());

app.listen(5000, () => {
  console.log('run in 5000');
})
