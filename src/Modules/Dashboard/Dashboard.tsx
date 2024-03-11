import { Divider } from 'antd';
import ChartData from './Components/ChartData';
import TopCard from './Components/TopCard';

const Dashboard = () => {
  return (
    <div>
      <TopCard />
      <Divider />
      <ChartData />
    </div>
  );
};

export default Dashboard;
