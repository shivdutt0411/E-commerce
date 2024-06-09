import user from "../model/userSchema.js";

export  async function userLogin(req,res){
    try{
    const{userName,password} = req.body;

    let User = await user.findOne({$or:[{userName:userName},{email:userName},{phone:userName}],password:password});
    if(User){
        return res.status(201).json({message:User})
    }
    else{
        return res.json({message:"Invalid userName/password"});
    }
    }
    catch(error){
        return res.status(500).json({message:error.message});
    }
}