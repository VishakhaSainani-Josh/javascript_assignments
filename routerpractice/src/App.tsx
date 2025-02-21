import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddTodo from "./Components/AddTodo";
import Home from "./Components/Home";
import ViewTodo from "./Components/ViewTodo";
import { useState } from "react";
import ProtectedRoute from "./Components/ProtectedRoute";
import Task from "./Components/Task";
import TaskProvider from "./Context/taskContext";
import AuthProvider from "./Context/userContext";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/todo" element={<AddTodo />} />
            <Route path="/todos" element={<ViewTodo />} />
            <Route path="/todos/:id" element={<Task />} />
          </Route>
        </Routes>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
