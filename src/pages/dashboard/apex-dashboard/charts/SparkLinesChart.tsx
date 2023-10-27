import { ApexOptions } from "apexcharts";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
interface props {
  title: string;
  subtitle: string;
  color: string;
}
const SparkLinesChart = ({ title, subtitle, color }: props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [seriesSpark1, setSeriesSpark1] = useState<ApexAxisChartSeries>([
    {
      name: subtitle,
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 60],
      color: color,
    },
  ]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [optionsSpark1, setOptionsSpark1] = useState<ApexOptions>({
    colors: [color],
    chart: {
      type: "bar",
      height: 140,
      sparkline: {
        enabled: true,
      },
    },
    labels: [
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
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    fill: {
      opacity: 0.6,
    },
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    yaxis: {
      min: 0,
    },
    title: {
      text: title,
      offsetX: 0,
      style: {
        fontSize: "16px",
      },
    },
    subtitle: {
      text: subtitle,
      offsetX: 0,
      style: {
        fontSize: "12px",
        color: color,
      },
    },
  });

  return (
    <div className="chart-spark">
      <ReactApexChart
        options={optionsSpark1}
        series={seriesSpark1}
        type="bar"
        height={120}
      />
    </div>
  );
};

export default SparkLinesChart;
