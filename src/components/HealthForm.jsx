import { useState } from "react";
import "./HealthForm.css";

function HealthForm({ onAdd }) {
  const [weight, setWeight] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [spo2, setSpo2] = useState("");
  const [sleepHours, setSleepHours] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const now = new Date();
    const entry = {
      date: now.toISOString().split("T")[0], // YYYY-MM-DD
      time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      weight: parseFloat(weight),
      heartRate: parseInt(heartRate),
      spo2: parseInt(spo2),
      sleepHours: parseFloat(sleepHours),
    };
    onAdd(entry);
    setWeight("");
    setHeartRate("");
    setSpo2("");
    setSleepHours("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Your Health Data</h2>
      <input
        type="number"
        placeholder="Weight (KG)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="HeartRate (BPM)"
        value={heartRate}
        onChange={(e) => setHeartRate(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="SpO2 %"
        value={spo2}
        onChange={(e) => setSpo2(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Sleep Hours"
        value={sleepHours}
        onChange={(e) => setSleepHours(e.target.value)}
        required
      />
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default HealthForm;
