"use client";

export default function Input({type, name, value, placeholder, onChange }) {
  return (
    <div>
        <input className="w-full my-3 pt-3 px-3 bg-inherit border-b-2 outline-none focus:border-green-500 focus:invalid:border-red-500 focus:bg-inherit rounded-md" autoComplete="off" autoCorrect="off" type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} required/>
    </div>
  )
}
