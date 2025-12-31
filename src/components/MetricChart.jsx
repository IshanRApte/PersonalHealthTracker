import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

function MetricChart({ entries, metric }) {
  const data = {
    labels: entries.map((e) => `${e.date} ${e.time}`).reverse(),
    datasets: [
      {
        label: metric,
        data: entries.map((e) => e[metric]).reverse(),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>{metric}</h3>
      <Line data={data} />
    </div>
  );
}

export default MetricChart;
