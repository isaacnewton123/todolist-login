import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/loading";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "./context";
import * as authService from "./authService";

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
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [navigate, loading, user]);

  const value = {
    user,
    setUser,
    loading,
    setLoading,
  };

  if (loading) {
    return <Loading />;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
