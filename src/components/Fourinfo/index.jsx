import React from "react";
import "./index.css"

function Fourinfopage({ stateData, selectedtype }) {
  if (!stateData) return <p>Loading...</p>;

//   // Capitalize heading
//   const heading = selectedType.charAt(0).toUpperCase() + selectedType.slice(1); {heading}: {stateData.total[selectedType] || 0}

  return (
    <div className="fourinfo-container">
      <h2>Cases by District</h2>
      <p className="total-line">Total District</p>

      <div className="districts-grid">
        {stateData.districts.map((d) => (
          <div key={d.name} className="district-card">
            <h3 className="district-name">{d.name}</h3>
            <p className="district-count">{d[selectedtype] || 0}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fourinfopage;
