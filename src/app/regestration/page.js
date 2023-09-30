"use client" ;

import UserRegestration from "../components/UserRegestration";
export default function page() {
  return (
    <div>
        <UserRegestration formTitle="Regestration on our system" url="http://127.0.0.1:3000/api/usersApi"/>
    </div>
  )
}
