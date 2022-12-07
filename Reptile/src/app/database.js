const mongoose = require('mongoose')
const config = require('./config')

// console.log(config.APP_HOST);

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

const test=`mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.APP_HOST}:${config.APP_PORT}/${config.MONGO_DATABASE}`

console.log(test);

const db = mongoose.createConnection(
    `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DATABASE}`,
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
