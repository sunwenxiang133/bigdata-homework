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

exports.GhostAnimal=db.model('GhostAnimal',CrawlInfoSchema)