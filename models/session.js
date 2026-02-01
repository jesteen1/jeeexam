import mongoose from "mongoose";


const postsScehma = new mongoose.Schema({
    Email:{type: String, required: true },
    key: { type: String, required: true },
    
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 21600
    }
})
;

const sessionModel = mongoose.models.sessions || mongoose.model("sessions", postsScehma)  

export default sessionModel 