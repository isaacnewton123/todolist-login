import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import LoginContainer from "../containers/LoginContainers";

const LoginPages = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.registeredSuccess) {
      toast.success("Registrasi berhasil! Silakan login.");
    }
  }, [location.state]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <LoginContainer />
    </div>
  );
};

export default LoginPages;