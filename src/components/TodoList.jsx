import TaskValue from "./molecules/TaskValue";
import { useAuth } from "./hooks/useAuth";
import { useAuthTask } from "../api/authTask";

const TodoList = ({ detailTask}) => {
  const { filteredTodos } = useAuth();
  const { completed, deleteTask } = useAuthTask();


  return (
    <div className="space-y-4">
      {filteredTodos.map((a) => (
        <TaskValue
          key={a._id}
          title={a.title}
          category={a.category?.name || "Tidak ada kategori"}
          completed={a.completed}
          onClick={() => detailTask(a)}
          onDelete={() => deleteTask(a._id)}
          onChange={() => completed(a._id, a)}
        />
      ))}
    </div>
  );
};

export default TodoList;
