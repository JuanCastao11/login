import mongoose  from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        dafault: Date.now
    },
},{
    timestamps: true
})

export default mongoose.model("Task", taskSchema)