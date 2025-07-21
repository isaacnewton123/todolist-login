import { toast } from "react-toastify";
import * as authService from "./authService";
import { useAuth } from "../components/hooks/useAuth";
import { Category } from "../components/atoms/Category";

export const useAuthTask = () => {
  const { setTodos, setCategories } = useAuth();

  const addTask = async (value) => {
    try {
      const task = await authService.addTask(value);
      setTodos((prevTodos) => [...prevTodos, task.data]);
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
      setTodos((prevTodos) =>
        prevTodos.map((a) => (a._id === item._id ? task.data : a))
      );
      toast.success("selamat");
    } catch (err) {
      console.error("ada masalah", err);
      toast.error("tidak dapat mengubah task");
    }
  };

  const deleteTask = async (item) => {
    try {
      await authService.deleteTask(item);
      setTodos((prevTodos) => prevTodos.filter((a) => a._id !== item));
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

  return {
    addTask,
    completed,
    deleteTask,
    addCategory,
  };
};
