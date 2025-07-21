import { useState } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Headers";
import TodoList from "../components/TodoList";
import ModalAddTask from "../components/modal/AddTask";
import ModalAddCategory from "../components/modal/AddCategory";
import DetailTaskModal from "../components/modal/DetailTask";
import { useEffect } from "react";

const DashboardContainers = ({ onLogout }) => {
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [addCategoryModal, setAddCategoryModal] = useState(false);
  const [detailTaskModal, setDetailTaskModal] = useState(false);
  const [detailTask, setDetailTask] = useState(null);


  useEffect(() => {
    console.log("Detail Task:", detailTask);
  }, [detailTask]);

  const openAddTaskModal = () => {
    setAddTaskModal(true);
  };

  const closeAddTaskModal = () => {
    setAddTaskModal(false);
  };

  const openAddCategoryModal = () => {
    setAddCategoryModal(true);
  };

  const closeAddCategoryModal = () => {
    setAddCategoryModal(false);
  };

  const openDetailTaskModal = (task) => {
    setDetailTaskModal(true);
    setDetailTask(task);
  };

  const closeDetailTaskModal = () => {
    setDetailTaskModal(false);
    setDetailTask(null);
  };

  return (
    <div className="flex h-screen">
      {detailTaskModal ? (
        <DetailTaskModal onClick={closeDetailTaskModal} todos={detailTask} />
      ) : (
        <></>
      )}
      {addCategoryModal ? (
        <ModalAddCategory onClick={closeAddCategoryModal} />
      ) : (
        <></>
      )}
      {addTaskModal ? <ModalAddTask onClick={closeAddTaskModal} /> : <></>}

      <SideBar onClick={openAddCategoryModal} />
      <div className="flex-1 p-8 overflow-y-auto">
        <Header openModal={openAddTaskModal} onLogout={onLogout} />
        <TodoList detailTask={openDetailTaskModal} />
      </div>
    </div>
  );
};

export default DashboardContainers;
