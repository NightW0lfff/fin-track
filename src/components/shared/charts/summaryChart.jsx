import data from "../../../assets/data/data";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  scales,
  ArcElement,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, scales, ArcElement, ChartDataLabels);

const options = {
  responsive: "auto",
  animation: {
    duration: 1500,
    loop: false,
    // easing: "linear",
  },
  plugins: {
    datalabels: {
      display: true, // Set to true to display labels
      color: "#fff", // Text color
      // anchor: "end", // Positioning relative to the arc
      align: "center", // Aligns the text inside the arc
      formatter: (value) => `${value}`, // Display the value itself
    },
    legend: {
      position: "bottom",
      display: true,
    },
    tooltip: {
      enabled: true, //false
    },
  },
};

function SummaryChart() {
  return (
    <div className="chart chart__summary">
      <Doughnut data={data[1]} options={options} />
    </div>
  );
}

export default SummaryChart;
