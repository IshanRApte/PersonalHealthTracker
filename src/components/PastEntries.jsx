import { Link } from "react-router-dom";
import "./PastEntries.css";

function PastEntries({ entries }) {
  if (entries.length === 0) return <p>No entries yet.</p>;

  return (
    <div className="past-entries">
      <h2>Past Entries</h2>
      {entries.map((e) => (
        <Link key={`${e.date}-${e.time}`} to={`/entry/${e.date}-${e.time}`}>
          <button className="date-btn">
            {e.date} {e.time}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default PastEntries;
