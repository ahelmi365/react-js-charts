import { ApexOptions } from "apexcharts";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const StackedChart = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [series, setSeries] = useState([
    {
      name: "Pending",
      data: [53, 32, 33, 52, 13, 43, 32],
    },
    {
      name: "Accepted",
      data: [12, 17, 11, 9, 15, 11, 20],
    },
    {
      name: "Rejected",
      data: [9, 7, 5, 8, 6, 9, 4],
    },
  ]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [options, setOptions] = useState<ApexOptions>({
    colors: ["#feb019", "#00e396", "#ff4560"],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      stackType: "100%",
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    title: {
      text: "100% Requests by Year",
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      title: {
        text: "Percentages",
      },
    },
    yaxis: {
      title: {
        text: "Year",
      },
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val + "K";
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      offsetX: 100,
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default StackedChart;
