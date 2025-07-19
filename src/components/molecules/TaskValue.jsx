import ChildrenText from "../atoms/ChildrenText";
import HeaderText from "../atoms/HeaderText";

const TaskValue = ({ variantTile, variantNotes, title, notes, onClick }) => {
  return (
    <div className="cursor-pointer ml-4 flex-1" onClick={onClick}>
      <HeaderText variant={variantTile} children={title} className={null} />
      <ChildrenText variant={variantNotes} children={notes} className={null} />
    </div>
  );
};

export default TaskValue;
