import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/loading";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "./context";
import * as authService from "./authService";
import { toast } from "react-toastify";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        const isExpired = decodedUser.exp * 1000 < Date.now();
        if (isExpired) {
          setUser(null);
          authService.logout();
        } else {
          setUser(decodedUser);
        }
      } catch (error) {
        console.error(error);
        setUser(null);
        authService.logout();
      }
    }
  }, []);

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [navigate, loading, user]);

  useEffect(() => {
    if (!user) {
      setTodos([]);
      return;
    }
    const fetchData = async () => {
      try {
        const task = await authService.getTask();
        setTodos(task.data);
        toast.info("berhasil mengambil data");
      } catch (error) {
        toast.error("tidak datap mengambil tugas");
        console.error(error);
      } finally {
        setLoading(false)
      }
    };
    fetchData();
  }, [user]);

  const value = {
    user,
    setUser,
    loading,
    setLoading,
    todos,
    setTodos,
  };

  if (loading) {
    return <Loading />;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
