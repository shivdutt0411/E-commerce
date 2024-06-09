import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
        
    },
    lastName:{
        type:String,
        required:true,
        trim:true

    },
    userName:{
        type:String,
        required:true,
        trim:true,
        unique: true,
        index:true,
        lowercase: true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true

    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
        unique:true
    }




});

const user = mongoose.model("user",userSchema);

export default user;