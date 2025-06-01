// components/ProfileViewer.jsx
import React, { useState } from "react";

const ProfileViewer = ({ name, email, isPremiumUser }) => {
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid #aaa", borderRadius: "8px" }}>
      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile && (
        <>
          <h3>{name}</h3>
          <p>Email: {email}</p>
          <p>
            {isPremiumUser ? "🌟 Premium Member" : "🔒 Upgrade to Premium"}
          </p>
        </>
      )}
    </div>
  );
};

export default ProfileViewer;