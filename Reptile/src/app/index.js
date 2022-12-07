const express=require('express')
const app=express()
const useRoutes=require('../router')
const bodyParser=require('body-parser')
app.useRoutes=useRoutes

// app.useRoutes()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.useRoutes()

module.exports=app