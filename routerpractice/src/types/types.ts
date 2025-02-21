export interface AuthUser{
    id:string,
    name:string
}

export interface AuthContextUser{
    user : AuthUser,
    login:()=>void,
    logout:()=>void
}


export interface task{
    title :string,
    description:string
}

export type TaskContextType = {
  tasks: task[];
  setTasks: (tasks: task[]) => void;
};