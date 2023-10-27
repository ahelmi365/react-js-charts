import LineChart from "./charts/LineChart";

const Dashboard = () => {
  return (
    <div>
      <div className="card p-3 mt-5 col-6">
        <LineChart />
      </div>
    </div>
  );
};

export default Dashboard;
