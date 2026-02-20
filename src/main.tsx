import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import AppRoutes from "./routes";
import { HabitProvider } from "./providers/habitProvider";
import { AuthProvider } from "./providers/authProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <HabitProvider>
          <AppRoutes />
        </HabitProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);