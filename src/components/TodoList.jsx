import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import TaskValue from "./molecules/TaskValue";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoList = ({ onClick, value = "dihasdh" }) => {
  return (
    <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <FaRegCheckCircle className="cursor-pointer h-5 w-5  text-white  hover:text-indigo-600" />
      <TaskValue
        variantTile={"task"}
        variantNotes={"task"}
        title={value}
        notes={value}
        onClick={onClick}
      />
      <RiDeleteBin6Line className="cursor-pointer h-5 w-5  text-white  hover:text-red-600" />
    </div>
  );
};

export default TodoList;
