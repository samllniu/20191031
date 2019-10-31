const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    name:{
        type:String,
      //  require:true,
        // minlength:4,
        // maxlength:10,
    },
    email:{
        type:String,
        //required:true,
    },
    phone:{
        type:Number,
        // minlength:11,
        // maxlength:13
    },
    password:{
        type:Number,
        // minlength:6,
        // maxlength:10
    }
})
const users = mongoose.model('users', schema);

// async function createUser () {
// 	const user = await User.create({
// 		name: 'iteheima',
// 		email: 'itheima@itcast.cn',
//         password: 739097437,
//         phone:18712473451
		
// 	});
// }

// createUser();
module.exports = {
	users
}