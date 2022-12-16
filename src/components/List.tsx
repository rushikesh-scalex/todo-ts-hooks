import React from 'react';
import Todo from './Modal';
import SingleTodo from './SingleTodo';
interface Props{
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const List:React.FC<Props> = ({todos,setTodos}) => {
    // console.log(todos);
    const displayList = todos.map((todo)=>{
        return(
            <SingleTodo setTodos={setTodos} todo={todo} key={todo.id} todos={todos}   />
        )
    })
  return (
    <div>
        {displayList}
    </div>
  )
}

export default List;

{/* <div key={element.id} >
                <h1>{element.todo}</h1>
                <i className='fa fa-trash' ></i>
                <i className="fa-solid fa-pen-to-square"></i>
            </div> */}