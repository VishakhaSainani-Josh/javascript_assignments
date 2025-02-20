import { useState } from "react";
import "./App.css";
import Todo from "./Components/Todo";

interface task {
  title: string;
  description: string;
}

function App() {
  const [tasks, setTasks] = useState<task[]>([]);
  const [newTask, setNewTask] = useState<task>({ title: "", description: "" });

  function addTask() {
    if (!newTask.title.trim()) {
      alert("task title cannot be empty");
      return;
    }
    setTasks([...tasks, newTask]);
    setNewTask({ title: "", description: "" });
  }

  function deleteTask(index: number) {
    const updatedTask = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(updatedTask);
  }

  return (
    <div>
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
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
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
        {tasks.map((task, index) => {
          return (
            <Todo
              key={index}
              title={task.title}
              description={task.description}
              onDelete={() => deleteTask(index)}
            />
          );
        })}
        <button type="submit" onClick={() => setTasks([])}>
          Clear all tasks
        </button>
      </div>
    </div>
  );
}

export default App;
