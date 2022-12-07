const express = require('express')
const router = express.Router({})
const testController=require('../controller/test.controller')

router.post('/crawl', testController.crawlInfo)

exports.router = router
// 这个路由这里需要有/,千万千万别忘了
exports.routerPass = '/test'