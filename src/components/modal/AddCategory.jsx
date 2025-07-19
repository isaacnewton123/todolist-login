import AddCategoryContainers from "../../containers/AddCategoryContainers";
import "../../index.css";

const ModalAddCategory = ({ onAdd, onClick }) => {
  
  return (
    <div className="modal fixed inset-0 bg-opacity-50 flex items-center justify-center p-4">
      <AddCategoryContainers onAdd={onAdd} onClick={onClick} />
    </div>
  );
};

export default ModalAddCategory;
