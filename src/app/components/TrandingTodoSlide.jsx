import "../globals.css";

export default function TrandingTodoSlide() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const listed = num.map((value, index)=>{
        return(
            <div className=" sliderCard bg-slate-400" key={index}>
                <h2 className="text-green-300 p-5 ">{value}</h2>
            </div>
        )
    })
    return (
   <div className="m-auto slideParent border-2 border-green-600 md:max-w-4xl max-w-lg">
     <div className="slide-main" >
        {listed}
    </div>
   </div>
  )
}
