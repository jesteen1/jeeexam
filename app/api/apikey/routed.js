import { NextResponse } from "next/server";
import connect from "../../../db";



import apiModel from "../../../models/apikey";


export const GET = async (req) => {
  try {
    await connect()

const data=await apiModel.findOne({key:"peterman"})
// const data2=await apiModel.create({key:"peterman"})
    // const input=await PostModel.insertOne({
    //     title:"million",
    //     description:"the mand",
    return  NextResponse.json( data)
    
  } catch (e) {
    return new NextResponse("Internal Server Error" + e, { status: 500 })
  }
}
export const POST = async (req) => {
  try {
    await connect()
    

    
      // Send an email using async/await


      

    
   




    
    

    // const input=await PostModel.insertOne({
    //     title:"million",
    //     description:"the mand",
    return   NextResponse.json({  info:info1, }, { status: 400 });
  } catch (e) {
    console.log("API ERROR:", e); 
    return new NextResponse("Internal Server Error" + e, { status: 500 })

  }
}
