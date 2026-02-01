import mongoose from "mongoose";

const postsScehma = new mongoose.Schema({
    Email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const PostModel = mongoose.models.Post || mongoose.model("Post", postsScehma)  

export default PostModel 