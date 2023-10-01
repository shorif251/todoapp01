import "../../globals.css";
import Todo from "./Todo";
const GetTodos = async()=>{
    let res = await fetch("http://127.0.0.1:3000/api/todosApi",{ next: { revalidate: 1800 } });
    res = await res.json();
    const resData = res;
    return resData; 
}
export default async function Todos() {
    const TodosData = await GetTodos();
    const listedTodo = TodosData.success? TodosData.result.map((value)=>{
        const {_id, name, title, desc} = value;
        return(
            <div key={_id} className="shadow shadow-slate-950 rounded-md p-3">
                <Todo id={_id} name={name} title={title} desc={desc} />
            </div>
        )
    }): TodosData.result;

    return (
    <div className="md:my-40 my-32">
        <h1 className=" my-10 text-green-100 text-3xl font-semibold">#See All Todos</h1>
        <div className="CardItems ">
            {listedTodo}
        </div>
    </div>
  )
}
