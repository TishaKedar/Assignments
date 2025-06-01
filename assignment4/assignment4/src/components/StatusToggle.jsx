// components/StatusToggle.jsx
import React, { useState } from "react";

const StatusToggle = () => {
  const [isOnline, setIsOnline] = useState(true);

  const toggleStatus = () => setIsOnline(!isOnline);

  const statusStyle = {
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
    backgroundColor: isOnline ? "#d4fcd4" : "#fcd4d4",
  };

  return (
    <div style={statusStyle}>
      <h3>Status: {isOnline ? "🟢 Online" : "🔴 Offline"}</h3>
      <button onClick={toggleStatus}>Toggle Status</button>
    </div>
  );
};

export default StatusToggle;
