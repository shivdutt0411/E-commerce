import user from "../model/userSchema.js";


export async function userSignUp(req,res){
    try{

        const {userName,email,phone} = req.body;

        const exist = await user.findOne({$or:[{userName:userName},{email:email},{phone:phone}]});
        if(exist){
            return res.json({message:"User already exists"});
        }
        const data = req.body;
        const newUser = await user.create(data);
        return res.status(200).json({message: data});


    }
    catch(error){
        return res.status(500).json({message: error.message});

    }

}
