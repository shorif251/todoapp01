import "../globals.css";

export default function TrandingTodoSlide() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const listed = num.map((value, index)=>{
        return(
            <div className="sliderCard bg-slate-400" key={index}>
                <h2 className="text-green-300 ">{value}</h2>
            </div>
        )
    })
    return (
   <div className="slideParent">
     <div className="slide-main" >
        {listed}
    </div>
   </div>
  )
}
