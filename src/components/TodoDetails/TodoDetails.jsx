import { useLoaderData } from "react-router-dom";

const TodoDetails = () => {
  const todoDetails = useLoaderData();
  const { completed } = todoDetails;
  return (
    <div>
      <p>
        Is Complete: <b>{completed ? "Complete" : "Doing Now"}</b>
      </p>
    </div>
  );
};

export default TodoDetails;
