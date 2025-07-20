import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { lazy } from "react";
import { AuthProvider } from "./api/authContext";

import ProtectedRoute from "./components/ProtectedRoute";

import RegisterPages from "./pages/RegisterPages";
import LoginPages from "./pages/LoginPages";
// const DasboardPages = lazy(() => import("./pages/DashboardPages"));
import DasboardPages from "./pages/DashboardPages";
import { ToastContainer } from "react-toastify";
import Loading from "./components/loading";
import { Suspense } from "react";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
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
                  {/* <Suspense fallback={<Loading/>}> */}
                  <DasboardPages/>
                  {/* </Suspense> */}
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
