import { FaRegFolderOpen } from "react-icons/fa";
import Button from "../atoms/Button";
import { FaEllipsisV } from "react-icons/fa";


const CategoryItem = ({ category, onClick ,onModal, className}) => {
  return (
    <Button
      variant="filteringCategory"
      onClick={onClick}
      type={null}
      className={className}
    >
      <FaRegFolderOpen className="w-6 h-6" />
      <span className="ml-3">{category}</span>
      <FaEllipsisV onClick={onModal} className="ml-auto w-4 h-4 text-gray-400 hover:text-gray-600" />
    </Button>
  );
};

export default CategoryItem;
