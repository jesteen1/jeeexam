import mongoose from "mongoose";


;

const Otpschema = new mongoose.Schema({
    otp: { type: String, required: true },
   createdAt: {
    type: Date,
    default: Date.now(),
    expires: 800   // seconds
  },
   



})

const Otpdata = mongoose.models.otp || mongoose.model("otp", Otpschema)

export default Otpdata
