import { useParams } from "react-router-dom";
import { useTask } from "../Context/taskContext";
import "../App.css";

const Todo = () => {
  const { tasks } = useTask();
  const params = useParams();
  const id = Number(params.id);

  return (
    <div className="todo">
      <input className="input" />
      <div>
        <span className="title">{tasks[id].title}</span>
        <span className="description">{tasks[id].description}</span>
      </div>
    </div>
  );
};

export default Todo;
