"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LoginForm from "../components/LoginForm";
export default function page() {

  const [loginState, setLoginState] = useState(false);
  const pathname = usePathname();

  // console.log(pathname)
  return (
    <div className="mt-7">
        <LoginForm formTitle="Login to your account"/>
    </div>
  )
}

