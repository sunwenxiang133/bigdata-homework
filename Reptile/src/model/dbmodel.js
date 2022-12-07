const mongoose = require('mongoose')
const db = require('../app/database')
const Schema = mongoose.Schema

const CrawlInfoSchema=new Schema({
    title:{type:String},
    introduce:{type:String},
    viewer:{type:String},
    comment:{type:String},
    up:{type:String}
})

exports.CrawInfo=db.model('CrawlInfoSchema',CrawlInfoSchema)