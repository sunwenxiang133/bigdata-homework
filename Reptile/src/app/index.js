const express=require('express')
const app=express()
const useRoutes=require('../router')
app.useRoutes=useRoutes

app.useRoutes()
module.exports=app