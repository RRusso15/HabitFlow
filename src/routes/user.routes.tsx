import { lazy } from "react";
import { DashboardOutlined, CheckSquareOutlined } from "@ant-design/icons";

const DashboardPage = lazy(() => import("../pages/dashboard"));
const HabitsPage = lazy(() => import("../pages/habits"));

export const userRoutes = [
  {
    path: "dashboard",
    element: <DashboardPage />,
    icon: <DashboardOutlined />,
    name: "Dashboard",
  },
  {
    path: "habits",
    element: <HabitsPage />,
    icon: <CheckSquareOutlined />,
    name: "Habits",
  },
];