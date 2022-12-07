const dotenv=require('dotenv')
const fs=require('fs')
// const path=require('path')

dotenv.config({path:'./config.js'})

module.exports={
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DATABASE,
    MONGO_USER,
    MONGO_PASSWORD,

    APP_HOST,
    APP_PORT
}=process.env