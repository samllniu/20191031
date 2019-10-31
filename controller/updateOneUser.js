const {users}=require('../model/User');
module.exports=async (req,res)=>{
    const _id= req.body._id;
    await  users.findByIdAndUpdate({_id}, { email:req.body.email,name:req.body.name,phone:req.body.phone},(err,doc)=>{
        if(err){
            console.log(err);
            res.send(err)
        }else{
            console.log("....................")
            res.send(doc);
        }
    })
}