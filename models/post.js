import mongoose from "mongoose";


const postsScehma = new mongoose.Schema({
    name: { type: String, required: true },
    Email: { type: String, required: true ,unique:true},
    password: { type: String, required: true },
    
    schoolid:{ type: String, required: true },
    verfied:{type:Boolean,default:"false"},
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
;

const PostModel = mongoose.models.Post || mongoose.model("Post", postsScehma)  

export default PostModel 