const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/Test',{ useNewUrlParser: true,useUnifiedTopology: true,});
console.log('数据库连接成功');
