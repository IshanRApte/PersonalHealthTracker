import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HealthForm from "./components/HealthForm";
import PastEntries from "./components/PastEntries";
import EntryDetail from "./components/EntryDetail";
import Trends from "./components/Trends";
import "./App.css";

function App() {
  const [entries, setEntries] = useState([]);

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
    <div className="app-container">
      <h1>Personal Health Dashboard</h1>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="form-wrapper">
                <HealthForm onAdd={addEntry} />
                <Link to="/trends">
                  <button className="view-trends-btn">View Trends</button>
                </Link>
              </div>

              <PastEntries entries={entries} />
            </>
          }
        />

        <Route path="/entry/:datetime" element={<EntryDetail entries={entries} />} />
        <Route path="/trends" element={<Trends />} />
      </Routes>
    </div>
  );
}

export default App;
