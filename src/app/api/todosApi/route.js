import { connestionTodoApi } from "@/app/lib/db";
import { Todos } from "@/app/lib/model/todos";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    let result = [];
    let success = true;
    try{
        await mongoose.connect(connestionTodoApi);
        result = await Todos.find();
    }catch(err){
        result = `Something went wrong!`;
        success = false ;
    }
    return NextResponse.json({result, success })
}

export async function POST(req, res){
    let result = "";
    let success = true;
    try{
        const payload = await req.json();
        await mongoose.connect(connestionTodoApi);
        const newTodos = new Todos(payload);
        await newTodos.save(); 
        result = "Todo Is Saved"
    }catch(err){
        result = "Something went wrong!, todo didn\'t added";
        success = false;
    }
    console.log(res)
    return NextResponse.json({result, success})
}