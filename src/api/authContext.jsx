import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from "./authService";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../components/loading";
import { jwtDecode } from "jwt-decode";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        const isExpired = decodedUser.exp * 1000 < Date.now();
        if (isExpired) {
          authService.logout();
        } else {
          setUser(decodedUser);
        }
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        authService.logout();
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate, user]);

  const handleLogin = async (credentials) => {
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
      console.error(error)
      toast.error('Login Gagal , username atau password salah');
    }
  };

  const handleRegister = async (userData) => {
    try {
      await authService.register(userData);
      navigate("/login", { state: { registeredSuccess: true } });
    } catch (error) {
      console.error(error)
      toast.error('register gagal , username sudah ada');
    }
  };

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    toast.info("Anda telah logout.");
    navigate("/login");
  };

  const value = {
    user,
    loading,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={value}>
      <ToastContainer />
      {children}
    </AuthContext.Provider>
  );
};
