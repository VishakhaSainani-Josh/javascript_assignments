import { createContext, useContext, useState } from "react";
import { task, TaskContextType } from "../types/types";

const TaskContext = createContext<TaskContextType | null>(null);

const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<task[]>([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
export default TaskProvider;

export const useTask = () => {
  return useContext(TaskContext);
};
