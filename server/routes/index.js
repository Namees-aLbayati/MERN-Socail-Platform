const route =require('express').Router();
const usersRoutes=require('./api/usersRoutes')
route.use('/users',usersRoutes);
module.exports=route