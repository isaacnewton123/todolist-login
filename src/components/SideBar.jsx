import Button from "./atoms/Button";
import ChildrenText from "./atoms/ChildrenText";
import HeaderText from "./atoms/HeaderText";
import { FaRegFolderOpen } from "react-icons/fa";
import { useAuth } from "./hooks/useAuth";
import CategoryItem from "./molecules/Category";
import { useState } from "react";

const SideBar = ({ onClick }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const { user, categories, filterTodos } = useAuth();

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    filterTodos(categoryId);
  };

  return (
    <div className="w-64 bg-white dark:bg-gray-800 p-6 shadow-md flex flex-col">
      <HeaderText
        variant={"sideBar"}
        children={"TaskManager"}
        className={null}
      />
      <ChildrenText
        variant={"sideBar"}
        children={`Halo, ${user.username}`}
        className={null}
      />
      <HeaderText
        variant={"categorySideBar"}
        children={"Category"}
        className={null}
      />
      <nav className="flex-grow space-y-2">
        <Button
          variant="filteringCategory"
          onClick={() => handleCategoryClick(null)}
          type={null}
          className={
            activeCategory === null ? "bg-indigo-500 text-white" : null
          }
        >
          <FaRegFolderOpen className="w-6 h-6" />
          <span className="ml-3">Semua Tugas</span>
        </Button>
        {categories.map((cat) => (
          <CategoryItem
            key={cat._id}
            category={cat.name}
            onClick={() => handleCategoryClick(cat._id)}
            className={
              activeCategory === cat._id ? "bg-indigo-500 text-white" : null
            }
            onModal={undefined}
          />
        ))}
      </nav>
      <Button
        onClick={onClick}
        variant="addCategoryBtn"
        children={"+ Categori"}
        type={null}
        className={null}
      />
    </div>
  );
};

export default SideBar;
