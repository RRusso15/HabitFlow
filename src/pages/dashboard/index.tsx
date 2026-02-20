import { Card, Row, Col, Statistic, Progress } from "antd";
import { useHabitState } from "../../providers/habitProvider";

const Dashboard = () => {
  const { habits } = useHabitState();

  const total = habits.length;
  const completed = habits.filter(h => h.completed).length;
  const pending = total - completed;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <Card>
          <Statistic title="Total Habits" value={total} />
        </Card>
      </Col>

      <Col span={8}>
        <Card>
          <Statistic title="Completed" value={completed} />
        </Card>
      </Col>

      <Col span={8}>
        <Card>
          <Statistic title="Pending" value={pending} />
        </Card>
      </Col>

      <Col span={24}>
        <Card title="Completion Rate">
          <Progress percent={completionRate} />
        </Card>
      </Col>
    </Row>
  );
};

export default Dashboard;