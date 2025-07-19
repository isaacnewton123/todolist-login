import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./api/authContext";

import ProtectedRoute from "./components/ProtectedRoute";

import RegisterPages from "./pages/RegisterPages";
import LoginPages from "./pages/LoginPages";
import DasboardPages from "./pages/DashboardPages";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to={"/login"} />} />
            <Route path="/login" element={<LoginPages />} />
            <Route path="/register" element={<RegisterPages />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DasboardPages />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
