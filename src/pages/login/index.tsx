import { useState, useEffect } from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuthActions, useAuthState } from "../../providers/authProvider";

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthActions();
  const { isAuthenticated, isPending, isError } = useAuthState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redirect after successful login
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/user/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async () => {
    await login(email, password);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f2f5",
      }}
    >
      <Card style={{ width: 350 }}>
        <Title level={3}>Habit Tracker Login</Title>

        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Email" required>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Password" required>
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          {isError && (
            <div style={{ color: "red", marginBottom: 10 }}>
              Invalid credentials
            </div>
          )}

          <Button
            type="primary"
            htmlType="submit"
            loading={isPending}
            block
          >
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;