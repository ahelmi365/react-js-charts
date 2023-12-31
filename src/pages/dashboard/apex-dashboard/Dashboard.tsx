import ColumnChart from "./charts/ColumnChart";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";
import SparkLinesChart from "./charts/SparkLinesChart";
import StackedChart from "./charts/Stacked";
import { useState } from "react";
import "./dashboard.css";

const Dashboard = () => {
  const [allAreShown, setAllAreShown] = useState(true);
  const [showSparkChart, setShowSparkChart] = useState(true);
  const [showPieChart, setShowPieChart] = useState(true);
  const [showLineChart, setShowLineChart] = useState(true);
  const [showStackedChart, setShowStackedChart] = useState(true);
  const [showBarChart, setShowBarChart] = useState(true);
  const [showAllChart, setShowAllChart] = useState(true);

  function handleShowAllChart(): void {
    setShowAllChart(!showAllChart);
    setShowSparkChart(!allAreShown);
    setShowPieChart(!allAreShown);
    setShowLineChart(!allAreShown);
    setShowStackedChart(!allAreShown);
    setShowBarChart(!allAreShown);
    setAllAreShown(!allAreShown);
  }

  return (
    <div className="dashboard-container mt-3 d-flex flex-column justify-content-center">
      {/* show hide charts */}
      <div className="row show-hide-charts">
        <div className="card mb-5 p-3 d-flex flex-row justify-content-around">
          {/* show all charts */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="showAllChart"
              checked={showAllChart}
              onChange={handleShowAllChart}
            />
            <label className="form-check-label" htmlFor="showAllChart">
              Show All Charts
            </label>
          </div>
          {/* showSparkChart */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="showSparkChart"
              checked={showSparkChart}
              onChange={() => setShowSparkChart(!showSparkChart)}
            />
            <label className="form-check-label" htmlFor="showSparkChart">
              Spark Chart
            </label>
          </div>
          {/* showPieChart */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="showPieChart"
              checked={showPieChart}
              onChange={() => setShowPieChart(!showPieChart)}
            />
            <label className="form-check-label" htmlFor="showPieChart">
              Pie Chart
            </label>
          </div>
          {/* showLineChart */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="showLineChart"
              checked={showLineChart}
              onChange={() => setShowLineChart(!showLineChart)}
            />
            <label className="form-check-label" htmlFor="showLineChart">
              Line Chart
            </label>
          </div>
          {/* showStackedChart */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="showStackedChart"
              checked={showStackedChart}
              onChange={() => setShowStackedChart(!showStackedChart)}
            />
            <label className="form-check-label" htmlFor="showStackedChart">
              Stacked Chart
            </label>
          </div>

          {/* showBarChart */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="showBarChart"
              checked={showBarChart}
              onChange={() => setShowBarChart(!showBarChart)}
            />
            <label className="form-check-label" htmlFor="showBarChart">
              Bar Chart
            </label>
          </div>
        </div>
      </div>

      {/* Main Charts */}
      {/* Spark Lines chart and  Pie Chart */}
      {(showSparkChart || showPieChart) && (
        <div className="row justify-content-between mb-5">
          {/* Spark Lines chart */}
          {showSparkChart && (
            <div className="card py-3 width-47 spark-card">
              <h6 className="fw-bold mb-5">All Requests by Status</h6>
              <div className="row align-items-center justify-content-around">
                <div className="card px-2 py-1 col-3">
                  <SparkLinesChart
                    title="1,520"
                    subtitle={`Pending`}
                    color="#feb019"
                  />
                </div>
                <div className="card px-2 py-1 col-3">
                  <SparkLinesChart
                    title="1,940"
                    subtitle="Accepted"
                    color="#00e396"
                  />
                </div>
                <div className="card px-2 py-1 col-3">
                  <SparkLinesChart
                    title="2,100"
                    subtitle="Rejected"
                    color="#ff4560"
                  />
                </div>
              </div>
            </div>
          )}
          {/* Pie Chart */}
          {showPieChart && (
            <div className="card pt-3 width-47">
              <PieChart />
            </div>
          )}
        </div>
      )}

      {/* Line Chart and Stacked chart */}
      {(showLineChart || showStackedChart) && (
        <div className="row justify-content-between mb-5">
          {/* Line Chart */}
          {showLineChart && (
            <div className="card width-47 pt-3">
              <LineChart />
            </div>
          )}

          {/* Stacked chart */}
          {showStackedChart && (
            <div className="card width-47 pt-3">
              <StackedChart />
            </div>
          )}
        </div>
      )}
      {/* Column Chart */}
      <div className="row mt-3">
        {showBarChart && (
          <div className="card col-12 pt-3">
            <ColumnChart />
          </div>
        )}
      </div>
    </div>
  );
};
export default Dashboard;
