import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddTodo from "./Components/AddTodo";
import Home from "./Components/Home";
import ViewTodo from "./Components/ViewTodo";
import { useState } from "react";
import ProtectedRoute from "./Components/ProtectedRoute";

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
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<ProtectedRoute user={user} />}>
          <Route
            path="/todo"
            element={<AddTodo tasks={tasks} setTasks={setTasks} />}
          />
          <Route
            path="/todos"
            element={<ViewTodo tasks={tasks}  />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
