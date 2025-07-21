import TaskValue from "./molecules/TaskValue";
import { useAuth } from "./hooks/useAuth";
import { useAuthTask } from "../api/authTask";

const TodoList = ({ detailTask }) => {
  const { todos } = useAuth();
  const { completed, deleteTask } = useAuthTask();

  const handleTaskDetail = (task) => {
    const taskDetail = {
      ...task,
      category: task.category ? task.category.name : "Tidak ada kategori",
    };
    detailTask(taskDetail);
  };

  return (
    <div className="space-y-4">
      {todos.map((a) => (
        <TaskValue
          key={a._id}
          title={a.title}
          category={a.category?.name || "Tidak ada kategori"}
          completed={a.completed}
          onClick={() => handleTaskDetail(a)}
          onDelete={() => deleteTask(a._id)}
          onChange={() => completed(a._id, a)}
        />
      ))}
    </div>
  );
};

export default TodoList;
