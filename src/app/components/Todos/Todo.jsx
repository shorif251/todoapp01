import Comments from "../Comment"
import Like from "../Like"
export default function Todo({id, name, title, desc}) {
  return (
    <div className="text-gray-400">
        <h1>{name}</h1>
        <h3>{title}</h3>
        <p>
          {desc}
        </p>
        <div className="flex justify-between">
          <Like likes={20}/>
          <Comments total={30} id={id}/>
        </div>
    </div>
  )
}
