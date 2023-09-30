const getData = async(id) =>{
  const res = await fetch(`http://localhost:3000/api/todosApi/${id}`, {cache:"no-cache"});
  const resData = res.json();
  return resData;
}
export default async function page({params}) {
  const {slug} = params
  const dynamicData = await getData(slug);
  const showDynamicData = ()=>{
    
     if(dynamicData.success){
      const {name, title, desc} = dynamicData.result;
      return(
        <div>
          <h1>{name}</h1>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      )
    }else{
      return(
        <h2>{dynamicData.result}</h2>
      )
    }
  }

  return (
    <div className="mx-auto md:max-w-3xl shadow shadow-gray-900 rounded-md ">
      <div className="p-3">{showDynamicData()}</div>
    </div>
  )
}
