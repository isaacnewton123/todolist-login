import ModalDetailTaskMolecules from "../molecules/ModalDetailTask";
import "../../index.css";

const DetailTaskModal = ({onClick}) => {
  return (
    <div className="modal fixed inset-0 bg-opacity-50 flex items-center justify-center p-4 ">
      <ModalDetailTaskMolecules onClick={onClick} />
    </div>
  );
};

export default DetailTaskModal;
