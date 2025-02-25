import { Link } from "react-router-dom";
import Todo from "./Todo";
import { useTask } from "../Context/taskContext";

const ViewTodo = () => {
  const { tasks } = useTask();
  return (
    <div>
      <h3>Click on any Todo to view it</h3>
      {tasks.map((task, index) => {
        return (
          <Link to={`/todos/${index}`} key={index}>
            <Todo
              key={index}
              title={task.title}
              description={task.description}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default ViewTodo;
