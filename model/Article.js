const mongoose=require('mongoose');

const articleSchema=new mongoose.Schema({
    title:{
        type:String,
        maxlength:20,
        minlength:4,
        required:[true,'请填写标题']
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,'请传递作者']
    },
    publishDate:{
        type:Date,
        default:Date.now
    },
    cover:{
        type:String,
        default:null
    },
    content:{
        type:String
    }

})

const Article=mongoose.model('articles',articleSchema);
// async function createarticle () {
// 	const article = await Article.create({
// 		title: '习近平总书记谈治国理政',
// 		author: '人民出版社',
//         publishDate: 2019-10-21,
//         cover:"封面",
//         content:"自党的十八大以来，在以习近平总书记为核心的党的领导集体...."		
// 	});
// }
// createarticle();
// console.log("创建成功");
module.exports={
    Article
}