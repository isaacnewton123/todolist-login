import ModalDetailTaskMolecules from "../molecules/ModalDetailTask";
import "../../index.css";

const DetailTaskModal = ({ onClick, todos }) => {
  return (
    <div className="modal fixed inset-0 bg-opacity-50 flex items-center justify-center p-4 ">
      <ModalDetailTaskMolecules
        onClick={onClick}
        title={todos.title}
        category={todos.category.name ? todos.category.name : " Tidak ada kategori"}
        notes={todos.description}
      />
    </div>
  );
};

export default DetailTaskModal;
