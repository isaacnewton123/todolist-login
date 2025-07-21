import ChildrenText from "../atoms/ChildrenText";
import HeaderText from "../atoms/HeaderText";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const TaskValue = ({
  title,
  category,
  completed,
  onClick,
  onDelete,
  onChange,
}) => {
  return (
    <div
      className={`flex items-center p-4 bg-white  rounded-lg shadow-sm ${
        completed ? "line-through dark:bg-green-900" : "dark:bg-gray-800"
      }`}
    >
      {completed === true ? (
        <FaRegCheckCircle
          onClick={onChange}
          className="cursor-pointer h-5 w-5  text-white  hover:text-indigo-600"
        />
      ) : (
        <MdOutlineRadioButtonUnchecked
          onClick={onChange}
          className="cursor-pointer h-5 w-5  text-white  hover:text-indigo-600"
        />
      )}
      <div className="cursor-pointer ml-4 flex-1" onClick={onClick}>
        <HeaderText
          variant={"task"}
          children={title}
          className={`${completed ? "line-through" : ""}`}
        />
        <ChildrenText variant={"task"} children={category} className={null} />
      </div>
      <div className="text-gray-400 hover:text-red-500 transition">
        <RiDeleteBin6Line
          onClick={onDelete}
          className="cursor-pointer h-5 w-5  text-white  hover:text-red-600"
        />
      </div>
    </div>
  );
};

export default TaskValue;
