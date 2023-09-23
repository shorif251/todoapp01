"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();


  const navItemStyles = "hover:border-b-2 hover:text-green-400 pb-2 transition-all border-green-100 rounded-xl"

  return (
    <nav className="flex md:flex-row gap-3 flex-col justify-between py-5 text-green-100">
      <span>
        <Link className="text-xl  font-light" href="/">TodoApp</Link>
      </span>
      <div className="flex md:flex-row gap-6 ml-3 md:ml-0 flex-col md:justify-between font-medium text-lg ">

        <Link className={navItemStyles} href="/">Home</Link>
        <Link className={navItemStyles} href="/about">About</Link>
        <Link className={navItemStyles} href={pathname != "/signin" ? "/signin" : "/regestration"  }>{pathname != "/signin" ? "Log In" : "Sign In"}</Link>
      </div>
    </nav>
  );
}
