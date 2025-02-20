import "../App.css";

interface todoProps {
  title: string;
  description: string;
  onDelete: () => void;
}

const Todo = ({ title, description, onDelete }: todoProps) => {
  return (
    <div className="todo">
      <div>
        <span className="title">{title}</span>
        <span className="description">{description}</span>
        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
