const router = require('koa-router')()
//建立模块，require(“../db/models/文件名”)
let Model = require("../db/models/arti");
router.prefix('/arti')

// 获取所有学校
router.get('/', function (ctx, next) {
    ctx.body = 'this is a articles response!'
})
// 接受post请求add，async function 声明定义了一个异步函数
router.post('/add', async function (ctx, next) {
    // ctx.request  Node的request对象
    // console.log(ctx.request.body)
    // Model是依据Schema构造生成的模型，有数据库操作的能力。
    let model = new Model(ctx.request.body);
    model = await model.save();
    // console.log('user',model)
    ctx.body = model
})

router.post('/find', async function (ctx, next) {
    let models = await Model.
    find({})
    ctx.body = models
})


router.post('/get', async function (ctx, next) {
    // let users = await User.
    // find({})
    // console.log(ctx.request.body)
    let model = await Model.find(ctx.request.body)
    // console.log(model)
    ctx.body = model
})

router.post('/update', async function (ctx, next) {
    console.log(ctx.request.body)
    let pbj = await Model.update({ _id: ctx.request.body._id }, ctx.request.body);
    ctx.body = pbj
})
router.post('/delete', async function (ctx, next) {
    console.log(ctx.request.body)
    await Model.remove({ _id: ctx.request.body._id });
    ctx.body = 'success '
})
module.exports = router
