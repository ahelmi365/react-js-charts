import { ApexOptions } from "apexcharts";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
const PieChart = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [series, setSeries] = useState<number[]>([1520, 1940, 2100]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [options, setOptions] = useState<ApexOptions>({
    colors: ["#feb019", "#00e396", "#ff4560"],
    chart: {
      type: "donut",
      height: 250,
    },
    labels: ["Pending", "Accepted", "Rejected"],
    title: {
      text: "100% Requests by Status",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "top",
          },
        },
      },
    ],
    legend: {
        position: 'left',
        offsetY: 50
      }
  });
  return (
    <div id="chart">
      {/* <button
        className="btn btn-primary"
        onClick={() => {
          setSeries([
            Math.floor(Math.random() * 50) + 300,
            Math.floor(Math.random() * 100) + 700,
            Math.floor(Math.random() * 200) + 900,
          ]);
          console.log(series);
        }}
      >
        update
      </button> */}
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={250}
        // width={"50%"}
      />
    </div>
  );
};

export default PieChart;
