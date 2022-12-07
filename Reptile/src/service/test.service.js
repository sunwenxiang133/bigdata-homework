const {CrawInfo} = require('../model/dbmodel')

exports.saveInfo=function (data) {
    console.log('执行到这一步了')
    /*let saveData = {
        title: data[0],
        introduce: data[1],
        viewer: data[2],
        comment: data[3],
        year: data[4],
        month: data[5]
    }*/
    let msg = new CrawInfo(data)
    msg.save(function (err, result) {
        if (err) {
            console.log('消息储存错误')
        } else {
            console.log('消息储存成功')
        }
    })
}