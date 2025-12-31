import MetricChart from "./MetricChart";
import { useEffect, useState } from "react";

function Trends() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("healthData")) || [];
    setEntries(stored);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Health Trends</h2>
      <MetricChart entries={entries} metric="weight" />
      <MetricChart entries={entries} metric="heartRate" />
      <MetricChart entries={entries} metric="spo2" />
      <MetricChart entries={entries} metric="sleepHours" />
    </div>
  );
}

export default Trends;
