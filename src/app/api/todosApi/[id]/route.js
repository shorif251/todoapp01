import { connestionTodoApi } from "@/app/lib/db";
import { Todos } from "@/app/lib/model/todos";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, res){
    let result = '';
    let success = true;
    try{
        const {id} = res.params;
        await mongoose.connect(connestionTodoApi);
        const filter = {_id : id}
        result = await Todos.findById(filter);

    }catch(err){
        result = "Something went wrong!";
        success = false;
    }
    return NextResponse.json({result, success});
}