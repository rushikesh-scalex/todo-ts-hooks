import React from "react";
import Todo from "./Modal";
import SingleTodo from "./SingleTodo";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const List: React.FC<Props> = ({ todos, setTodos }) => {
  const displayList = todos.map((todo) => {
    return (
      <SingleTodo setTodos={setTodos} todo={todo} key={todo.id} todos={todos} />
    );
  });
  return <div>{displayList}</div>;
};

export default List;
