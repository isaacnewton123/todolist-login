import { toast } from "react-toastify";
import * as authService from "./authService";
import { useAuth } from "../components/hooks/useAuth";
import { Category } from "../components/atoms/Category";

export const useAuthTask = () => {
  const { setTodos, setCategories, setFilteredTodos, todos} = useAuth();

  const addTask = async (value) => {
    try {
      const task = await authService.addTask(value);
      const newtodos = [...todos, task.data];
      setTodos(newtodos);
      setFilteredTodos(newtodos);
      toast.success("Tugas Berhasil Di Simpan");
    } catch (err) {
      console.error("gagal mengirim tugas", err);
      toast.error("Gagal Menyimpan Tugas");
    }
  };

  const completed = async (id, item) => {
    try {
      const task = await authService.editComplete(id, {
        completed: !item.completed,
        categoryId: item.category ? item.category._id : null,
      });
      const update = todos.map((a) => (a._id === item._id ? task.data : a))
      setTodos(update);
      setFilteredTodos(update);
      toast.success("selamat");
    } catch (err) {
      console.error("ada masalah", err);
      toast.error("tidak dapat mengubah task");
    }
  };

  const deleteTask = async (item) => {
    try {
      await authService.deleteTask(item);
      const del = todos.filter((a) => a._id !== item);
      setTodos(del);
      setFilteredTodos(del);
      toast.success("selamat");
    } catch (err) {
      console.error("ada masalah ", err);
      toast.error("tidak dapat menghapus data , ada masalah");
    }
  };

  const addCategory = async (item) => {
    try {
      const response = await authService.postCategory({ name: item });
      setCategories((prevCategories) => [...prevCategories, response.data]);
      toast.success("Kategori berhasil ditambahkan");
    } catch (error) {
      console.error("Gagal menambahkan kategori", error);
      toast.error("Gagal menambahkan kategori");
      throw error;
    }
  };

  const deleteCategory = async (id) => {
    try {
      await authService.deleteCategory(id);
      setCategories((prevCategories) =>
        prevCategories.filter((cat) => cat._id !== id)
      );
      toast.success("Kategori berhasil dihapus");
    } catch (error) {
      console.error("Gagal menghapus kategori", error);
      toast.error("Gagal menghapus kategori");
      throw error;
    }
  };

  return {
    addTask,
    completed,
    deleteTask,
    addCategory,
    deleteCategory,
  };
};
