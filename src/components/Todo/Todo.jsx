import { Link } from "react-router-dom";
import "./Todos.css";
const Todo = ({ todo }) => {
  const { id, title, completed } = todo;
  return (
    <div className="todo">
      <h4>Single Todo is Here</h4>
      <p>Todo Id: {id}</p>
      <p>Todo Title: {title}</p>

      <Link to={`/todo/${id}`}>
        <button>See Details</button>
      </Link>
    </div>
  );
};

export default Todo;
