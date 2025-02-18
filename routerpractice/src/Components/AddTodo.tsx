import { useState } from "react";

function AddTodo({
  tasks,
  setTasks,
}: {
  tasks: { title: string; description: string }[];
  setTasks: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        description: string;
      }[]
    >
  >;
}) {
  const [newTask, setNewTask] = useState<{
    title: string;
    description: string;
  }>({ title: "", description: "" });

  function addTask() {
    if (!newTask.title.trim()) {
      alert("task title cannot be empty");
      return;
    }
    setTasks([...tasks, newTask]);
    setNewTask({ title: "", description: "" });
  }

  return (
    <div className="app-container">
      <h2>TO DO TODAY!</h2>
      <div>
        <input
          style={{
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#dbdcff",
            color: "black",
          }}
          type="text"
          name="title"
          placeholder="Enter title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          style={{
            background: "#dbdcff",
            color: "black",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            width: "320px",
          }}
          className="input-description"
          type="text"
          name="description"
          placeholder="Enter description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        <button type="submit" onClick={addTask}>
          Add Task
        </button>
        <button
          type="submit"
          onClick={() => setNewTask({ title: "", description: "" })}
        >
          Refresh
        </button>
        <button type="submit" onClick={() => setTasks([])}>
          Clear all tasks
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
