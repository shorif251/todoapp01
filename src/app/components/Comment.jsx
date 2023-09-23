
import Link from "next/link";
import "../globals.css";

export default function Comment({total, id}) {
    
    return (
        <Link className="btnTailwindClasses" href={`/${id}`}>Comments {total}</Link>
  )
}
