import { Layout, Menu } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import { userRoutes } from "../routes/user.routes";

const { Header, Sider, Content } = Layout;

export default function UserLayout() {
  const location = useLocation();

  // Extract active route safely
  const pathParts = location.pathname.split("/");
  const selectedKey = pathParts[2] || "dashboard";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <div style={{ color: "white", padding: 16, fontWeight: "bold" }}>
          Habit Tracker
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
        >
          {userRoutes.map((route) => (
            <Menu.Item key={route.path} icon={route.icon}>
              <Link to={`/user/${route.path}`}>
                {route.name}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>

      <Layout>
        <Header style={{ background: "#001529", color: "white" }}>
          Welcome
        </Header>

        <Content style={{ padding: 24 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}