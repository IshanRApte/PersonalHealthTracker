import { useParams, Link } from "react-router-dom";
import "./EntryDetail.css";

function EntryDetail({ entries }) {
  const { datetime } = useParams();
  const entry = entries.find((e) => `${e.date}-${e.time}` === datetime);

  if (!entry) return <p>No data found for this entry.</p>;

  return (
    <div className="entry-detail">
      <h2>Health Data for {entry.date} at {entry.time}</h2>
      <table>
        <tbody>
          <tr>
            <td>Weight (kg)</td>
            <td>{entry.weight}</td>
          </tr>
          <tr>
            <td>Heart Rate (bpm)</td>
            <td>{entry.heartRate}</td>
          </tr>
          <tr>
            <td>SpO₂ (%)</td>
            <td>{entry.spo2}</td>
          </tr>
          <tr>
            <td>Sleep Hours</td>
            <td>{entry.sleepHours}</td>
          </tr>
          <tr>
            <td>Submission Time</td>
            <td>{entry.time}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/">
        <button className="back-btn">Back</button>
      </Link>
    </div>
  );
}

export default EntryDetail;
