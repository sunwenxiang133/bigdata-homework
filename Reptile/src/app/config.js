const dotenv=require('dotenv')
const fs=require('fs')
// const path=require('path')

dotenv.config({path:'./config.env'})

module.exports={
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DATABASE,
    MONGO_USER,
    MONGO_PASSWORD,

    APP_HOST,
    APP_PORT
}=process.env

// console.log('123123123123123'+process.env.APP_HOST);