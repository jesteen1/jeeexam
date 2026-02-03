import { NextResponse } from "next/server";
import connect from "./../.././../db";
import PostModel from "../../../models/post";
import nodemailer from "nodemailer";
import Otpdata from "../../../models/otp";
import bcrypt from "bcrypt"
import { cookies } from "next/headers";
import apiModel from "../../../models/apikey";
var otp = Math.floor(Math.random() * 10000)
export const GET = async (req) => {
    try {
        await connect()
    } catch (e) {
        return new NextResponse("Internal Server Error" + e, { status: 500 })
    }
}

export const POST = async (req) => {
    try {
        await connect()
   const data21=await apiModel.findOne({key:process.env.SECRET_KEY})
   if(data21){

       const cookiesstore=await cookies()
       const data1 = await req.json()
       console.log('DATA',data1)

       var data = "no"

  const cookie1= cookiesstore.get("userofjee").value
  const datafromdbmail=await PostModel.findOne({schoolid:cookie1})
  const Email=datafromdbmail.Email
       if (data1.coded == "resend") {
           var num = Math.floor(1000 + Math.random() * 9000);


           const mail = async (otp) => {
               const transporter = nodemailer.createTransport({
                   host: "smtp.gmail.com",
                   port: 587,
                   secure: false,
                   auth: {
                       user: "fullstackreacts@gmail.com",
                       pass: process.env.PASS_ID,
                   },
               });

               await transporter.sendMail({
                   from: '"JEE EXAM" <fullstackreacts@gmail.com>',
                   to: Email,
                   subject: "otp verification",
                   text: "otp code:" + otp,
                   html: `<b>${otp}</b>`,
               });
           }

           await mail(num)
           await Otpdata.create({ otp:num })
           data = "resend_done"
       }
       else{
           console.log(data1.coded)
           const datafromdb = await Otpdata.findOne({ "otp": data1.coded })
           console.log("datafromdb"+datafromdb)
           if (datafromdb) {
               data = {data:"done"}
               const cookie1= cookiesstore.get("userofjee").value
               const datafromdbid=await PostModel.findOne({schoolid:cookie1})
              if (datafromdbid){
               datafromdbid.verfied=true
               await datafromdbid.save()
              }
           }
       }
        return new NextResponse(JSON.stringify(data), { status: 200 })
   }
        

        return new NextResponse(JSON.stringify("hellow"), { status: 200 })
    
    } catch (e) {
        console.log(e)
        return new NextResponse("Internal Server Error" + e, { status: 500 })

    }
}
