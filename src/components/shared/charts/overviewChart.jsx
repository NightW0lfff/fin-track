import data from "../../../assets/data/data";
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

ChartJS.register(Title, Tooltip, Legend, scales, BarElement, BarController);

const options = {
  responsive: "auto",
  scales: {
    // display: false,
    y: {
      // reverse: true,
      max: 100,
      display: "auto",
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
      title: {
        display: false,
        text: "Y Title",
        align: "center",
        padding: { bottom: 20 },
      },
    },
    x: {
      grid: {
        drawTicks: false,
      },
      title: {
        display: false,
        text: data[0].datasets[0].startDate,
        align: "center",
        padding: { top: 20 },
        font: {
          size: 20,
        },
      },
    },
  },
  // animation: {
  //   duration: 1500,
  //   loop: true,
  //   // easing: "easeInOutCube",
  // },
  plugins: {
    datalabels: {
      display: false,
      color: "#fff",
      anchor: "end",
      align: "start",
      // formatter: (value) => `${value}`,
    },
    legend: {
      display: false,
      position: "right",
    },
    title: {
      display: false,
      text: "Overview",
      font: {
        size: 25,
      },
    },
    tooltip: {
      enabled: false,
    },
  },
};

const OverviewChart = () => (
  <div className="chart chart__overview">
    <Bar data={data[0]} options={options} />
  </div>
);

export default OverviewChart;
