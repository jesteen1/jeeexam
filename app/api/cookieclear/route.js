import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import connect from "../../../db";
import PostModel from "../../../models/post";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import sessionModel from "../../../models/session"

export const GET = async (req) => {
  try {
    await connect()
    
 
    //     description:"the mand",
return   NextResponse.json({man:"hwwlow"}, { status: 400 });
  } catch (e) {
    console.log(e)
    return new NextResponse("Internal Server Error" + e, { status: 500 })
  }
}

export const POST = async (req) => {
  try {
    await connect()
    
    const data12=await req.formData()
    const Email = data12.get("mail");
    const datafromdb=sessionModel.deleteOne({"Email":Email})
    const cookiesstore =await cookies()
  cookiesstore.delete("usersessionid");

    
      
      
      
       
        const info3="done"
    return   NextResponse.json(JSON.stringify({  info:info3, mail: Email }), { status: 400 });
    }
   
 
   catch (e) {
    console.log("API ERROR:", e); 
    return new NextResponse("Internal Server Error" + e, { status: 500 })

  }
}




 