import { IoClose } from "react-icons/io5";
import Button from "../atoms/Button";
import DetailTask from "../layout/DetailTask";

const ModalDetailTaskMolecules = ({ title, category, notes , onClick}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-6">
      <div className="flex justify-end items-end mb-6">
        <IoClose
          onClick={onClick}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-3xl leading-none cursor-pointer"
        />
      </div>
      <div className="space-y-4">
        <DetailTask
          title={title}
          category={category}
          notes={notes}
        />
        <div className="flex justify-end mt-8">
          <Button
            variant="cancelBtn"
            children={"Tutup"}
            type={"button"}
            className={null}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalDetailTaskMolecules;
