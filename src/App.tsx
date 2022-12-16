import React, { useState } from 'react'
import Header from './components/Header'
import InputField from './components/InputField'
import List from './components/List';
import Todo from './components/Modal';

const App: React.FC= () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      setTodo('');
    }
  }
  // console.log(todos);
  return (
    <div>
      <Header/>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <List setTodos={setTodos} todos={todos}/>
    </div>
  )
}

export default App