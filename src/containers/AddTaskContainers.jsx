import HeaderText from "../components/atoms/HeaderText";
import FormModal from "../components/Form/FormAddTask";

const ModalAddTaskContainers = ({ onClick }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-6">
      <HeaderText variant={"modal"} children={"TambahTugas"} className={null} />
      <FormModal onClick={onClick} />
    </div>
  );
};

export default ModalAddTaskContainers;
