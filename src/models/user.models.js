import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type:String,
        require: true,
        trim: true 
    },


    email:{
        type:String,
        unique:true,
        require:true,
        trim:true
    },
    password:{
        type:String,
        require:true
    }
},{
    timestamps: true  // adds createdAt and uptadeAt fields to the schema
})

export default mongoose.model("User",userSchema);