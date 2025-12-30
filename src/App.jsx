import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HealthForm from "./components/HealthForm";
import PastEntries from "./components/PastEntries";
import EntryDetail from "./components/EntryDetail";

function App() {
  const [entries, setEntries] = useState([]);

  // Load entries from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("healthData")) || [];
    setEntries(saved);
  }, []);

  const addEntry = (entry) => {
    const updatedEntries = [entry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem("healthData", JSON.stringify(updatedEntries));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Personal Health Dashboard</h1>
      <Routes>
        {/* Home: form + past entries */}
        <Route
          path="/"
          element={
            <>
              <HealthForm onAdd={addEntry} />
              <PastEntries entries={entries} />
            </>
          }
        />
        {/* Entry details page */}
        <Route
          path="/entry/:datetime"
          element={<EntryDetail entries={entries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
