"use client";
import { useState } from "react";
import "../globals.css";
import Input from "./Input";

export default function LoginForm({formTitle}) {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const {email, password} = data;


    const receiveFormData = (e) =>{
        setData({...data, [e.target.name]:e.target.value})
    }

    const formSubmit = (e) =>{
        e.preventDefault();
        console.log(data);
    }


  return (
    <form className="formShowingStyle" action="" onSubmit={formSubmit}>
       <h1 className="text-center text-2xl text-gray-300">{formTitle}</h1>
        <div className="mt-10">
            <Input type="email" name="email" value={email} placeholder="example@email.com" onChange={receiveFormData}/>

            <Input type="password" name="password" value={password} placeholder="********" onChange={receiveFormData}/>

            <div className="my-5 flex justify-center">
                <input className="btnTailwindClasses" style={{width:"100%"}}  type="submit" value="Log In" disabled={(email && password) == ""? true : false}/>
            </div>
        </div>        
    </form>
  )
}
