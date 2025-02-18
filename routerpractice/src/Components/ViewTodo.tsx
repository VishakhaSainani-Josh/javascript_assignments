import Todo from "./Todo";

const ViewTodo = ({
  tasks,
}: {
  tasks: { title: string; description: string }[];
  
}) => {
  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <Todo key={index} title={task.title} description={task.description} />
        );
      })}
    </div>
  );
};

export default ViewTodo;
