const express=require('express');
const app=express();
const user=require('./router/User.js')
// const formidable=require('formidable');

const article=require('./router/Article.js')
const bodyPaser = require('body-parser');
app.use(bodyPaser.urlencoded({ extended: true }));
app.use(bodyPaser.json());
require('./model/connect.js');
// 静态资源访问服务功能
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// 邮箱地址验证
app.use('/user',user);
app.use('/article',article);

app.listen(80);
console.log('网站服务器启动');
