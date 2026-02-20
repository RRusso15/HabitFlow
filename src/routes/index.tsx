import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { userRoutes } from "./user.routes";
import UserLayout from "../layouts/user";
import EmptyLayout from "../layouts/empty";
import LoginPage from "../pages/login";
import withAuth from "../hoc/withAuth";

// Protect the entire user layout
const ProtectedUserLayout = withAuth(UserLayout, {
  allowedRoles: ["user"],
});

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>

        {/* Public Routes */}
        <Route element={<EmptyLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Protected User Routes */}
        <Route path="/user" element={<ProtectedUserLayout />}>
          {userRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Route>

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/user/dashboard" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;