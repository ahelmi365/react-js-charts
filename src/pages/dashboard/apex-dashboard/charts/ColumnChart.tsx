import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";

const ColumnChart = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [series, setSeries] = useState<ApexAxisChartSeries>([
    {
      name: "Pending",
      data: [120, 132, 101, 134, 90, 230, 210, 220, 223, 240, 250, 230],
    },
    {
      name: "Accepted",
      data: [220, 182, 191, 234, 290, 330, 310, 320, 323, 340, 350, 330],
    },
    {
      name: "Rejected",
      data: [150, 232, 201, 154, 190, 330, 410, 420, 423, 440, 450, 430],
    },
  ]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [options, setOptions] = useState<ApexOptions>({
    colors: ["#feb019", "#00e396", "#ff4560"],
    chart: {
      type: "bar",
      height: 350,
      zoom: {
        enabled: true,
      },

      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
    },

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
 
    title: {
      text: "Requests Bars by Month",
      align: "left",
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      title: {
        text: "Month",
      },
    },
    yaxis: {
      title: {
        text: "Number of Requests",
      },
      min: 0,
      max: 500,
    },
  });

  return (
    <ReactApexChart series={series} options={options} type="bar" height={400} />
  );
};
export default ColumnChart;
