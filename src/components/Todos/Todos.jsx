import { useLoaderData } from "react-router-dom";
import Todo from "../Todo/Todo";

const Todos = () => {
  const todos = useLoaderData();
  return (
    <div>
      <h2>Todos Here: {todos.length}</h2>
      <div className="todos">
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo}></Todo>
        ))}
      </div>
    </div>
  );
};

export default Todos;
