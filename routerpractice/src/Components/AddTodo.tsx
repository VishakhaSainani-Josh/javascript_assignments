import { useState } from "react";
import { useTask } from "../Context/taskContext";
import '../App.css'

function AddTodo() {
  const { tasks, setTasks } = useTask();

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
    alert("To Do added");
  }

  return (
    <div className="app-container">
      <h2>TO DO TODAY!</h2>
      <div>
        <input
          className="input-title"
          type="text"
          name="title"
          placeholder="Enter title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
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
