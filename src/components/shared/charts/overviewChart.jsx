import data from "../../../assets/data";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  scales,
  BarElement,
  BarController,
} from "chart.js";
import { color } from "chart.js/helpers";

ChartJS.register(Title, Tooltip, Legend, scales, BarElement, BarController);

const options = {
  responsive: true,
  scales: {
    y: {
      title: {
        display: true,
        text: "Y Title",
        align: "center",
        padding: { bottom: 20 },
      },
    },
  },
  plugins: {
    datalabels: {
      display: true,
      color: "#fff",
      anchor: "end",
      align: "start",
      // formatter: (value) => `${value}`,
    },
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Overview",
      font: {
        size: 25,
      },
    },
  },
};

const OverviewChart = () => (
  <div style={{ width: "100%", height: "35rem", justifyContent: "center" }}>
    <Bar data={data[0]} options={options} />
  </div>
);

export default OverviewChart;
