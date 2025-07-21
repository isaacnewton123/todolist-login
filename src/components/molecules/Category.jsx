import { FaRegFolderOpen } from "react-icons/fa";
import Button from "../atoms/Button";

const CategoryItem = ({ category, onClick , className}) => {
  return (
    <Button
      variant="filteringCategory"
      onClick={onClick}
      type={null}
      className={className}
    >
      <FaRegFolderOpen className="w-6 h-6" />
      <span className="ml-3">{category}</span>
    </Button>
  );
};

export default CategoryItem;
