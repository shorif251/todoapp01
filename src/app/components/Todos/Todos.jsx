import "../../globals.css";
import Todo from "./Todo";
const GetTodos = async()=>{
    let res = await fetch("https://jsonplaceholder.typicode.com/posts",{ next: { revalidate: 0 } });
    res = await res.json();
    const resData = res;
    return resData; 
}
export default async function Todos() {
    const TodosData = await GetTodos();
    const listedTodo = TodosData.length > 0 ? TodosData.map((value)=>{
        // const {_id, name, title, desc} = value;
        const {id, title, body} = value;

        return(
            <div key={id} className="shadow shadow-slate-950 rounded-md p-3">
                <Todo id={id} name="Todo App" title={title} desc={body} />
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
