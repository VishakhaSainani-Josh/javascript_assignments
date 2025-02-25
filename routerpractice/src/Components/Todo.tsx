import "../App.css";
import { task } from "../types/types";

const Todo = ({ title, description }: task) => {
  return (
    <div className="todo">
      <input className="input" />
      <div>
        <span className="title">{title}</span>
        <span className="description">{description}</span>
      </div>
    </div>
  );
};

export default Todo;
