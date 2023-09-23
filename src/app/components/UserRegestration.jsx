"use client" ;

import { useState } from "react";
import Input from "./Input";
export default function UserRegestration({formTitle, url}) {
  const [data, setData] = useState({
    frname: "",
    lsname: "",
    email: "",
    password: "",
  })
  const [dataResponse, setDataResponse] = useState(null);

  const {frname, lsname, email, password} = data;

  const formChange = (e) =>{
    setData({...data, [e.target.name]:e.target.value});
  }

  const formSubmit = async(e) =>{
    e.preventDefault();
    console.log(data);

    const res = await fetch(url,{
        method: "POST",
        body: JSON.stringify({
            frname,
            lsname,
            email,
            password,
        }),
    })
    const resData = await res.json();
    setDataResponse(resData);  

    setData({
        frname: "",
        lsname: "",
        email: "",
        password: "",
        
    })
  }

    return (
        <form className="formShowingStyle" action="" onSubmit={formSubmit}>
            <h1>{formTitle}</h1>
            <div>
                <Input type="text" name="frname" value={frname} placeholder="Enter First Name" onChange={formChange}  />
            </div>

            <div>
                <Input type="text" name="lsname" value={lsname} placeholder="Enter Surname " onChange={formChange}  />
            </div>

            <div>
                <Input type="email" name="email" value={email} placeholder="example@email.com" onChange={formChange}  />
            </div>

            <div>
                <Input type="password" name="password" value={password} placeholder="********" onChange={formChange}  />
            </div>
           
            <div className="my-5 flex justify-center">
                <input className="btnTailwindClasses" style={{width:"100%"}}  type="submit" value="Sign Up"  />
            </div>
        </form>
    )
}
