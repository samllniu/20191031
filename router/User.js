const express=require('express');
const User=express.Router();

User.get('/getAllUser',require('../controller/getAllUser'))
User.get('/getOneUser',require('../controller/getOneUser'))
User.post('/saveOneUser',require('../controller/saveOneUser'))
User.get('/deleteOneUser',require('../controller/deleteOneUser.js'))
User.post('/updateOneUser',require('../controller/updateOneUser.js'))
module.exports = User;