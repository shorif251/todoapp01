export default function Button({type, onClick, btnName, className}) {
  return (
    <button className={className} type={type} onClick={onClick}>{btnName}</button>
  )
}
