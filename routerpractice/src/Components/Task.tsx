import { useParams } from "react-router-dom";

const Todo = ({
  tasks,
}: {
  tasks: { title: string; description: string }[];
}) => {
  const params = useParams();
  const id = Number(params.id);
  console.log(id);
  console.log(tasks[id]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "10px",
        gap: "10px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <input style={{ width: "18px", height: "18px" }} type="checkbox" />
      <div style={{ flexGrow: 1 }}>
        <span style={{ fontWeight: "bold", display: "block", color: "black" }}>
          {tasks[id].title}
        </span>
        <span style={{ color: "#555", fontSize: "14px" }}>
          {tasks[id].description}
        </span>
      </div>
    </div>
  );
};

export default Todo;
