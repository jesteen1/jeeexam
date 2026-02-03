import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import connect from "../../../db";
import PostModel from "../../../models/post";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import sessionModel from "../../../models/session"

import apiModel from "../../../models/apikey";



export const GET = async (req) => {
  try {
    await connect()
const data=await apiModel.findOne({key:process.env.SECRET_KEY})
if(data){

  const cookiesstore =await cookies()
  const cookiedata= cookiesstore.get("usersessionid")?.value
  const mailidfromdb=await sessionModel.findOne({"key":cookiedata})
  const mailid=mailidfromdb?.Email
  return   NextResponse.json(JSON.stringify({  mailids:mailid }), { status: 400 });
}   

 //console.log(mailid)
    // const input=await PostModel.insertOne({
    //     title:"million",
    //     description:"the mand",
return   NextResponse.json(JSON.stringify({  mailids:"hellow" }), { status: 400 });
  } catch (e) {
    console.log(e)
    return new NextResponse("Internal Server Error" + e, { status: 500 })
  }
}
export const POST = async (req) => {
  try {
    await connect()
    
    const cookiesstore =await cookies()
    
    const data = await req.formData()
    

    console.log(data)
    const password = data.get("password");
    const Email = data.get("Email");
    
    
    const datafromdb = await PostModel.findOne({ "Email": Email ,"password":password})
    if(datafromdb){
   function generateId() {
      return Math.random().toString(36).substring(2, 10)
    }




   
      var sessionid = generateId()
      console.log(datafromdb)
      
      
      
      
      const datatodb = await sessionModel.create({  Email:Email, key:sessionid})
      
      
      
       cookiesstore.set("usersessionid", sessionid, {
          
          maxAge: 7200,     // life in seconds
          path: "/",        // whole site
          // sameSite: "lax"   // CSRF protection
        })
        const info3="done"
    return   NextResponse.json(JSON.stringify({  info:info3, mail: Email }), { status: 400 });
    }
     else{
      const info2="wrong"
      return NextResponse.json(JSON.stringify({  info:info2, mail: Email }), { status: 400 })
    }

    // const input=await PostModel.insertOne({
    //     title:"million",
    //     description:"the mand",
   



    
  
  }
 

      // Send an email using async/await


   

    

    
 
   catch (e) {
    console.log("API ERROR:", e); 
    return new NextResponse("Internal Server Error" + e, { status: 500 })

  }
}
