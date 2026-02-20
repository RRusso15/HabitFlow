import { useEffect } from "react";
import { Card, Button, Table, Tag, Space, Spin, Alert } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useHabitActions, useHabitState } from "../../providers/habitProvider";

const Habits = () => {
  const { getHabits } = useHabitActions();
  const { habits, isPending, isError } = useHabitState();

  useEffect(() => {
    getHabits();
  }, []);

  const columns = [
    {
      title: "Habit",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Status",
      key: "completed",
      render: (_: any, record: any) =>
        record.completed ? (
          <Tag color="green">Completed</Tag>
        ) : (
          <Tag color="orange">Pending</Tag>
        ),
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <Space>
          <Button type="link">Edit</Button>
          <Button type="link" danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  if (isPending) return <Spin size="large" />;
  if (isError) return <Alert type="error" message="Failed to load habits" />;

  return (
    <Card
      title="My Habits"
      extra={
        <Button type="primary" icon={<PlusOutlined />}>
          Add Habit
        </Button>
      }
    >
      <Table
        dataSource={habits}
        columns={columns}
        rowKey="id"
        pagination={false}
      />
    </Card>
  );
};

export default Habits;