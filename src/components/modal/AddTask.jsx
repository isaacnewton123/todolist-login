import ModalAddTaskContainers from "../../containers/AddTaskContainers";
import "../../index.css";

const ModalAddTask = ({ onAdd, onClick }) => {
  
  return (
    <div className="modal fixed inset-0 bg-opacity-50 flex items-center justify-center p-4">
      <ModalAddTaskContainers onAdd={onAdd} onClick={onClick} />
    </div>
  );
};

export default ModalAddTask;
