const { users }=require('../model/User.js')
module.exports= async (req,res)=>{
    //res.send('ok');
    let result = await users.find({});
    res.send(result);
}

