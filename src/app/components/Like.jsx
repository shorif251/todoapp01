"use client";

import { useState } from "react";
import "../globals.css";
import Button from "./Button";

export default function Like({likes}) {
  const [isActive, setIsActive] = useState(false);
  const [like, setLike] = useState(likes);

  const likesReceiver = ()=>{
    if(!isActive){
        setLike((oldLike)=> oldLike + 1);
        setIsActive(true);
    }if(isActive){
        setLike((oldLike)=> oldLike - 1)
        setIsActive(false);
    }
  }  

  return (
    <div>
      <Button className="btnTailwindClasses" type="button" onClick={likesReceiver} btnName={`Like ${like}`}/>
    </div>
  )
}
