import { useState } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Headers";
import TodoList from "../components/TodoList";
import ModalAddTask from "../components/modal/AddTask";
import ModalAddCategory from "../components/modal/AddCategory";
import DetailTaskModal from "../components/modal/DetailTask";

const DashboardContainers = ({ onAddCategory, onAddTask, onLogout }) => {
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [addCategoryModal, setAddCategoryModal] = useState(false);
  const [detailTaskModal, setDetailTaskModal] = useState(false);

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

  const openDetailTaskModal = () => {
    setDetailTaskModal(true);
  };

  const closeDetailTaskModal = () => {
    setDetailTaskModal(false);
  };

  return (
    <div className="flex h-screen">
      {detailTaskModal ? (
        <DetailTaskModal onClick={closeDetailTaskModal} />
      ) : (
        <></>
      )}
      {addCategoryModal ? (
        <ModalAddCategory onAdd={onAddCategory} onClick={closeAddCategoryModal} />
      ) : (
        <></>
      )}
      {addTaskModal ? (
        <ModalAddTask onAdd={onAddTask} onClick={closeAddTaskModal} />
      ) : (
        <></>
      )}

      <SideBar onClick={openAddCategoryModal} />
      <div className="flex-1 p-8 overflow-y-auto">
        <Header openModal={openAddTaskModal} onLogout={onLogout} />
        <div className="space-y-4">
          <TodoList onClick={openDetailTaskModal} />
        </div>
      </div>
    </div>
  );
};

export default DashboardContainers;
