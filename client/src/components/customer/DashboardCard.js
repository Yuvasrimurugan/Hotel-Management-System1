import React from "react";

function DashboardCard({ title, value, color }) {
  return (
    <div className="col-md-3 mb-4">
      <div className={`card border-0 shadow bg-${color} text-white`}>
        <div className="card-body text-center">
          <h5>{title}</h5>
          <h2>{value}</h2>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;