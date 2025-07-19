import Button from "./atoms/button";
import ChildrenText from "./atoms/ChildrenText";
import HeaderText from "./atoms/HeaderText";
import { FaRegFolderOpen } from "react-icons/fa";

const SideBar = ({ onClick, username = "user" }) => {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 p-6 shadow-md flex flex-col">
      <HeaderText
        variant={"sideBar"}
        children={"TaskManager"}
        className={null}
      />
      <ChildrenText
        variant={"sideBar"}
        children={`Halo, ${username}`}
        className={null}
      />
      <HeaderText
        variant={"categorySideBar"}
        children={"Category"}
        className={null}
      />
      <nav className="flex-grow space-y-2">
        <Button variant="filteringCategory" type={null} className={null}>
          <FaRegFolderOpen className="w-6 h-6" />
          <span className="ml-3">Semua Tugas</span>
        </Button>
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
