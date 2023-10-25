import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const Dashboard = () => {
  const chartOptions: ApexOptions = {
    series: [
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
    ],

    chart: {
      height: 350,
      type: "line",
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
    dataLabels: {
      enabled: false,
    },

    stroke: {
      //   curve: "smooth",
      width: [2, 2, 2],
      colors: ["#6f6f6f", "#07bd74", "#af1d35"],
    },
    title: {
      text: "Requests Trends by Month",
      align: "left",
    },

    legend: {
      position: "top",
      horizontalAlign: "right",
      markers: {
        fillColors: ["#6f6f6f", "#07bd74", "#af1d35"],
      },
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
      max: 600,
    },
    tooltip: {
      marker: {
        fillColors: ["#6f6f6f", "#07bd74", "#af1d35"],
      },
    },
  };
  return (
    <ReactApexChart
      series={chartOptions.series}
      options={chartOptions}
      type="line"
      height={450}
        width={"50%"}
    />
  );
};
export default Dashboard;
