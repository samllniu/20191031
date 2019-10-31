const{ Article }=require('../model/Article.js')
module.exports= async (req,res)=>{
    //res.send('ok');
    let result = await Article.find({}).populate('author');;
    res.send(result);
    //console.log();
}
