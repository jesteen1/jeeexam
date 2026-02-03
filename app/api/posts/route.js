import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import connect from "../../../db";
import PostModel from "../../../models/post";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import apiModel from "../../../models/apikey";
import Otpdata from "../../../models/otp";

var otp = Math.floor(Math.random() * 10000)

export const GET = async (req) => {
  try {
    await connect()


    // const input=await PostModel.insertOne({
    //     title:"million",
    //     description:"the mand",
  } catch (e) {
    return new NextResponse("Internal Server Error" + e, { status: 500 })
  }
}
export const POST = async (req) => {
  try {

    await connect()
       const data21=await apiModel.findOne({key:process.env.SECRET_KEY})
    if(data21){



      const cookiesstore =await cookies()
      
      const data = await req.formData()
      
  
      console.log(data)
      const name = data.get("name");
      const password = data.get("password");
      const Email = data.get("Email");
      var num = Math.floor(1000 + Math.random() * 9000);
      var info1 = "done"
      const datafromdb = await PostModel.findOne({ "Email": Email })
  
      const mail = async (otp) => {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // Use true for port 465, false for port 587
          auth: {
            user: "fullstackreacts@gmail.com",
            pass: process.env.PASS_ID
            ,
          },
  
        });
  
        // Send an email using async/await
  
  
        const info = await transporter.sendMail({
          from: '"JEE EXAM 1" <fullstackgmail@gmail.com>',
          to: Email,
          subject: "otpvarification",
          text: "otp code:" + otp, // Plain-text version of the message
          html: `<b>${otp}</b>`, // HTML version of the message
        });
  
        console.log("Message sent:", info.messageId);
  
        transporter.verify((err, success) => {
          if (err) console.log(err)
          else console.log("Server ready")
        })
  
      }
      function generateId() {
        return Math.random().toString(36).substring(2, 10)
      }
  
  
  
  
      if (!datafromdb) {
        var schoolid = generateId()
        console.log(datafromdb)
        
        await mail(num)
        const otptodb = await Otpdata.create({ otp:num })
        const datahash= await bcrypt.hash(schoolid,10)
        const datatodb = await PostModel.create({ name:name, Email:Email, password:password, schoolid:schoolid,verfied:false})
        console.log("datatodb"+datatodb)
        
        console.log("otpdatatodb"+otptodb)
         cookiesstore.set("userofjee", schoolid, {
            
            maxAge: 7200,     // life in seconds
            path: "/",        // whole site
            // sameSite: "lax"   // CSRF protection
          })
          
      }
      else {
        info1 = "already"
      }
  
      // const input=await PostModel.insertOne({
      //     title:"million",
      //     description:"the mand",
       return   NextResponse.json({  info:info1, mail: Email }, { status: 400 });
    }
    return   NextResponse.json(JSON.stringify("hellow"), { status: 400 });
  } catch (e) {
    console.log("API ERROR:", e); 
    return new NextResponse("Internal Server Error" + e, { status: 500 })

  }
}
