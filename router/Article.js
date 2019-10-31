const express=require('express');
const article =express.Router();
article.get('/getAllArticle',require('../controller/getAllArticle'))

module.exports=article

