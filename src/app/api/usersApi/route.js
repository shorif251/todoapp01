import { connestionTodoApi } from "@/app/lib/db";
import { Users } from "@/app/lib/usersmodel/users";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(){
    let result = [];
    let success = true;
    try{
        await mongoose.connect(connestionTodoApi);
        result = await Users.find();
    }catch(err){
        result = "Something went wrong!";
        success = false;
    }
    return NextResponse.json({result, success})
}

export async function POST(req, res){
    let result = '';
    let success = true;
    try{
        await mongoose.connect(connestionTodoApi);
        const payload = await req.json();
        const newUser = new Users(payload); 
        await newUser.save();
        result = "Form was submited"
    }catch(err){
        result = "Something went wrong!";
        success = false;
    }
    return NextResponse.json({result, success})
}