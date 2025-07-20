import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import Loading from "./loading";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading === true) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
