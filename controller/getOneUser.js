const {users} =require('../model/User')
module.exports=async (req,res)=>{

    await users.findOne({_id:req.query.id},(err,doc)=>{
        if(err){
            res.send(err);
        }else{
            res.send(doc);
        }
    });
    //res.send('ok');
}