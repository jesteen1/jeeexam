import mongoose from "mongoose";


const postsScehma = new mongoose.Schema({
    key: { type: String, required: true },
})
;

const apiModel = mongoose.models.Api || mongoose.model("Api", postsScehma)  

export default apiModel 