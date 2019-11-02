const koa = require('koa');
const bodyparser = require('koa-bodyparser');
const Router = require('koa-router');
const path = require('path');
const views = require('koa-views');
const static = require('koa-static');

const app = new koa();
const router = new Router();

// s9 view & static
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

app.use(static(__dirname, './static'));

router.get('/', async (ctx, next) => {
  let title = '{test: "wang"}';
  await ctx.render('index', {title: title});
})

app
  .use(bodyparser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('server is running in 3000');
})

// app.use(async (ctx, next) => {
  // await next();
  // s1
  // ctx.response.type = 'text/html';
  // ctx.response.body = '<h1>hello world</h1>'

  // s2 request
  // ctx.response.body = {
  //   url: ctx.request.url, // url
  //   query: ctx.request.query, // 解析的查询字符串
  //   queryString: ctx.request.querystring //原始查询字符串
  // }

  // s3 post请求
  // let postData = '';
  // ctx.req.on('data', (data) => {
  //   postData += data;
  // })
  // ctx.req.on('end', () => {
  //   console.log(postData);
  // })

  // s4 处理路由
  // let method = ctx.request.method;
  // if (method === 'POST') {

  // } else if (method === 'GET') {
  //   if(ctx.request.path !== '/') {
  //     ctx.response.type = 'html';
  //     ctx.response.body = '<a href="/">GO TO INDEX</a>';
  //   }else {
  //     ctx.response.body = 'hello world';
  //   }
  // }

  // s5 response
  // ctx.response.status = 200;
  // if(ctx.request.accepts('json')) {
  //   ctx.response.type = 'json';
  //   ctx.response.body = {data: 'testdata'};
  // }else if (ctx.request.accepts('html')) {
  //   ctx.response.type = 'html';
  //   ctx.response.body = '<h1>hello world</h1>';
  // }else {
  //   ctx.response.type = 'text';
  //   ctx.response.body = 'hello world';
  // }

// })

// s6 中间件
// app.use(async (ctx, next) => { // 记录服务器响应时间的中间件
//   console.log('第一次事件')
//   let sTime = new Date().getTime(); // 记录当前时间戳
//   await next();                     // 时间控制权中转
//   let eTime = new Date().getTime();// 中间件执行完成后 时间戳
//   ctx.response.type = 'text/html';
//   ctx.response.body = '<h1>hello world</h1>';
//   console.log(`请求地址${ctx.path}, 响应时间${eTime - sTime}`);
// })

// app.use(async (ctx, next) => {
//   console.log('中间件1 start');
//   await next();
//   console.log('中间件1 end');
// })

// app.use(async (ctx, next) => {
//   console.log('中间件2 start');
//   await next();
//   console.log('中间件2 end');
// })


// s7 bodyparser 中间件
// app.use(bodyparser()); // 使用中间件解析post数据
// app.use(async (ctx, next) => {
//   if(ctx.request.url === '/' && ctx.request.method === 'GET') {
//     ctx.response.type = 'html';
//     let html = `
//       <h1>登录</h1>
//       <form method="post" action="/">
//         <p>用户名</p>
//         <input name="username" /><br/>
//         <p>密码</p>
//         <input name="password" type="password"/><br/>
//         <button type="submit">提交</button>
//       </form>
//     `
//     ctx.response.body = html;
//   }else if(ctx.url === '/' && ctx.method === 'POST') {
//     let postData = ctx.request.body;
//     ctx.body = postData;
//   }
// })

// s8 router
// app
//   .use(bodyparser())
//   .use(router.routes())
//   .use(router.allowedMethods());

// router.get('/', (ctx, next) => {
//   if (ctx.request.url === '/' && ctx.request.method === 'GET') {
//     ctx.response.type = 'html';
//     let html = `
//       <h1>登录</h1>
//       <form method="post" action="/">
//         <p>用户名</p>
//         <input name="username" /><br/>
//         <p>密码</p>
//         <input name="password" type="password"/><br/>
//         <button type="submit">提交</button>
//       </form>
//     `
//     ctx.response.body = html;
//   }
// })

// router.post('/', (ctx, next) => {
//   let postData = ctx.request.body;
//   ctx.body = postData;
// })



