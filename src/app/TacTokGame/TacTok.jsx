"use client";

import { useState } from "react";

export default function TacTok() {
    const [turn, setTurn] = useState("");
    const [slideState, setSlideState] = useState(true)
    const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const slideClickFun = () =>{
        setSlideState(!slideState);
        if(slideState){
            setTurn("X")
        }else{
            setTurn("Y");
        }

    }
    const listArrayBox = numberArr.map((value, index)=>{
        return(
            <div className="border border-gray-200 rounded-md" key={index}>
                <button type="button" onClick={slideClickFun} className="text-center p-10 ">{turn.length>0? turn : value}</button>
            </div>
        )
    })
    return (
    <div className="my-4">
        <h1>#TacTok Game</h1>
        <div className="max-w-lg mx-auto shadow shadow-gray-600 gameBoxStyle p-2">
            {listArrayBox}
        </div>
    </div>
  )
}
