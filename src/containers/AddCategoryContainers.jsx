import HeaderText from "../components/atoms/HeaderText";
import FormAddCategory from "../components/Form/FormAddCategory";


const AddCategoryContainers = ({ onClick}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-6">
      <HeaderText variant={"modal"} children={"Tambah Kategori"} className={null} />
      <FormAddCategory  onClick={onClick} />
    </div>
  );
};

export default AddCategoryContainers;
