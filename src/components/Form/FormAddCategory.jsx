import { useState } from "react";
import InputField from "../molecules/InputField";
import ButtonModal from "../molecules/ButtonModal";

const FormAddCategory = ({ onAdd, onClick }) => {
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!category.trim()) return;

    onAdd({ category });
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
