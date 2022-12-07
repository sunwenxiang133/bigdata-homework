const mongoose = require('mongoose')
const config = require('./config')

/*mongoose
  .connect('mongodb://root:JIO150621@162.14.78.140:27017/?retryWrites=true', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('Mongodb连接成功'))*/

/*mongoose
  .connect('mongodb://localhost:27017/?authSource=admin', {
    useCreateIndex: true,
    useNewUrlParser: true, //使用一个新的URL解析器
    useUnifiedTopology: true // 使用一个统一的新的拓扑结构
  })
  .then(() => console.log('Mongodb连接成功'))
  .catch(err => console.log(err, '数据库连接失败'))*/

const db = mongoose.createConnection(
    'mongodb://localhost:27017/bigdataStore',
    {
        // useCreateIndex: true,
        useNewUrlParser: true, //使用一个新的URL解析器
        useUnifiedTopology: true // 使用一个统一的新的拓扑结构
    }
)
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
    console.info('数据库连接成功')
})

module.exports = db
