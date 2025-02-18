import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddTodo from "./Components/AddTodo";
import Home from "./Components/Home";
import ViewTodo from "./Components/ViewTodo";
import { useState } from "react";
import ProtectedRoute from "./Components/ProtectedRoute";
import Task from "./Components/Task";

function App() {
  const [tasks, setTasks] = useState<{ title: string; description: string }[]>(
    []
  );

  type AuthUser = { id: string; name: string };
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => setUser({ id: "1", name: "vishakha" });
  const handleLogout = () => setUser(null);
  return (
    <>
      <Navbar />
      {user ? (
        <button onClick={handleLogout} style={{margin:"20px"}}>Logout</button>
      ) : (
        <button onClick={handleLogin} style={{margin:"20px"}}>Login</button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<ProtectedRoute user={user} />}>
          <Route
            path="/todo"
            element={<AddTodo tasks={tasks} setTasks={setTasks} />}
          />
          <Route path="/todos" element={<ViewTodo tasks={tasks} />} />
          <Route path="/todos/:id" element={<Task tasks={tasks} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
