import { useState } from "react";
import InputField from "../molecules/InputField";
import ButtonModal from "../molecules/ButtonModal";
import { useAuthTask } from "../../api/authTask";

const FormAddCategory = ({ onClick }) => {
  const [category, setCategory] = useState("");
  const { addCategory } = useAuthTask();

  function handleSubmit(e) {
    e.preventDefault();
    if (!category.trim()) return;


    addCategory(category)
    setCategory("");
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        className={"w-full px-4 py-2 mt-2"}
        children="Kategori"
        type="text"
        placeholder="Masukan Kategori Anda ..."
        required={true}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <ButtonModal onClick={onClick} />
    </form>
  );
};

export default FormAddCategory;
