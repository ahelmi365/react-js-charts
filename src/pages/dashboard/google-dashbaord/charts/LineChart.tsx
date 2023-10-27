import React, { useState } from "react";
import { Chart } from "react-google-charts";

const options = {
  chart: {
    title: "SeQRCode Requests",
    subtitle: "In 2023",
  },
};

const App: React.FC = () => {
    // eslint-disable-next-line
  const [data, setData] = useState([
    [{ type: "date", label: "Month" }, "Pending", "Accepted", "Rejected"],
    [new Date(2023, 0), 120, 220, 150],
    [new Date(2023, 1), 132, 182, 232],
    [new Date(2023, 2), 101, 191, 201],
    [new Date(2023, 3), 134, 234, 154],
    [new Date(2023, 4), 90, 290, 190],
    [new Date(2023, 5), 230, 330, 330],
    [new Date(2023, 6), 210, 310, 410],
    [new Date(2023, 7), 220, 320, 420],
    [new Date(2023, 8), 213, 313, 413],
    [new Date(2023, 9), 240, 340, 440],
    [new Date(2023, 10), 250, 350, 450],
    [new Date(2023, 11), 230, 330, 430],
  ]);
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default App;
