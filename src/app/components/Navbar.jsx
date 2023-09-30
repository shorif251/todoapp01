"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  console.log("path= "+ pathname)


  const navItemStyles = "hover:border-b-2 hover:text-green-400 pb-2 transition-all border-green-100 rounded-xl "
  
  const isActive = (active) =>{
    console.log(active)
     return pathname === active ? `${navItemStyles} text-green-800`: navItemStyles;
  }
  
  const isSignIn = (linked, unLinked) =>{
    return pathname === "/signin" ? linked : unLinked ; 
  }

  return (
    <nav className="flex md:flex-row gap-3 flex-col justify-between py-5 text-green-100">
      <span>
        <Link className="text-xl font-light" href="/">TodoApp</Link>
      </span>
      <div className="flex md:flex-row gap-6 ml-3 md:ml-0 flex-col md:justify-between font-medium text-lg ">

        <Link className={isActive("/")} href="/">Home</Link>
        <Link className={isActive("/about")} href="/about">About</Link>
        <Link className={isSignIn(isActive("/signin"), isActive("/regestration"))} href={isSignIn("/regestration", "/signin")}>{isSignIn("Sign In", "Log In" )}</Link>

      </div>
    </nav>
  );
}
