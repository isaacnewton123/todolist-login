import ChildrenText from "../atoms/ChildrenText";
import HeaderText from "../atoms/HeaderText";

const DetailTask = ({title, category, notes}) => {
  return (
    <>
      <HeaderText variant={"modal"} className={null} children={title} />
      <label className="font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        Kategori
      </label>
      <ChildrenText variant={"modal"} className={null} children={category} />
      <div>
        <label className="font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Deskripsi
        </label>
        <ChildrenText variant={"modal"} className={null} children={notes} />
      </div>
    </>
  );
};

export default DetailTask;
