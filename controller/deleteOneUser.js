const {users} =require('../model/User')
module.exports=async (req,res)=>{
  
         //回调函数中不能用 result   只能用doc
         await users.remove({_id:req.query.id},(err,doc)=>{
            if(err){
                res.send(err);
            }else{
                res.send(doc);
            }
        });
    //res.send('ok');
}