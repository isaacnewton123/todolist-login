import { useState } from "react";
import InputField from "../molecules/InputField";
// @ts-ignore
import TextAreaField from "../molecules/TextAreaField";
import ButtonModal from "../molecules/ButtonModal";
import { useAuthTask } from "../../api/authTask";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

const FormRegister = ({ onClick }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState(null);

  const { categories } = useAuth();

  useEffect(() => {
    console.log("Category Object:", categoryId);
    console.log("Categories Array:", categories);
  }, [categoryId, categories]);

  const { addTask } = useAuthTask();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    await addTask({ title, description, categoryId });

    setTitle("");
    setDescription("");
    setCategoryId(null);
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        className={"w-full px-4 py-2 mt-2"}
        children="Judul"
        type="text"
        placeholder="Masukan Title Anda ..."
        required={true}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextAreaField
        children={"Deskripsi"}
        rows={"3"}
        type={"text"}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder={"Masukan Deskripsi Di Sini ..."}
      />
      <div className="mb-6">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {"pilih kategori"}
        </label>
        <select
          value={categoryId?._id || ""}
          onChange={(e) => {
            const selectedCategory = categories.find(
              (cat) => cat._id === e.target.value
            );
            setCategoryId(selectedCategory);
          }}
          className="text-white w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <ButtonModal onClick={onClick} />
    </form>
  );
};

export default FormRegister;
