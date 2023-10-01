"use client" ;

import UserRegestration from "../components/UserRegestration";
export default function page() {
  return (
    <div>
        <UserRegestration formTitle="Regestration on our system" url="http://localhost:3000/api/usersApi"/>
    </div>
  )
}
