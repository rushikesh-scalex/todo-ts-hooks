import React, { useEffect, useRef, useState } from "react";
import Todo from "./Modal";
interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const deleteTodo = (id: number) => {
    const list = todos.filter((element) => element.id !== id);
    setTodos(list);
  };
  const handleDone = (doneId: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === doneId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, todo.id)}>
        {edit ? (
          <input
            autoFocus={true}
            onChange={(e) => setEditTodo(e.target.value)}
            value={editTodo}
          />
        ) : todo.isDone ? (
          <s>{todo.todo}</s>
        ) : (
          <span>{todo.todo}</span>
        )}

        <div>
          <i onClick={() => deleteTodo(todo.id)} className="fa fa-trash"></i>
        </div>
        <div>
          <i
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
            className="fa-solid fa-pen-to-square"
          ></i>
        </div>
        <div>
          <i className="fa fa-check" onClick={() => handleDone(todo.id)}></i>
        </div>
      </form>
    </>
  );
};

export default SingleTodo;
