const express = require('express')
const router = express.Router({})
const crawlController=require('../controller/crawl.controller')

router.post('/crawl', crawlController.crawlInfo)
router.post('/remove',crawlController.removeAll)

exports.router = router
// 这个路由这里需要有/,千万千万别忘了
exports.routerPass = '/crawl'