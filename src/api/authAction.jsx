import { toast } from "react-toastify";
import * as authService from "./authService";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../components/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const useAuthAction = () => {
  const { setUser, setLoading } = useAuth();
  const navigate = useNavigate();

  const login = async (credentials) => {
    setLoading(true);
    try {
      const data = await authService.login(credentials);

      if (data && data.token) {
        const decodedUser = jwtDecode(data.token);
        setUser(decodedUser);
        toast.success("Berhasil Login!");
      } else {
        toast.error("Login gagal, tidak ada token diterima.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Login Gagal , username atau password salah");
      setLoading(false)
    }
  };

  const register = async (userData) => {
    setLoading(true);
    try {
      await authService.register(userData);
      toast.success("register berhasil");
      navigate("/login");
      
    } catch (error) {
      console.error(error);
      toast.error("register gagal , username sudah ada");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    navigate("login");
    setUser(null);
    toast.info("Anda telah logout.");
  };

  return {
    login,
    register,
    logout,
  };
};
