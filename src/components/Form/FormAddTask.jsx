import { useState } from "react";
import InputField from "../molecules/InputField";
// @ts-ignore
import TextAreaField from "../molecules/TextAreaField";
import CategorySelect from "../molecules/CategorySelect";
import ButtonModal from "../molecules/ButtonModal";

const FormRegister = ({ onAdd, onClick, category = 'semua' }) => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({ title, notes });
    setTitle("");
    setNotes("");
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
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder={"Masukan Deskripsi Di Sini ..."}
      />

      <CategorySelect children={"Kategori"} category={category} />

      <ButtonModal onClick={onClick} />
    </form>
  );
};

export default FormRegister;
