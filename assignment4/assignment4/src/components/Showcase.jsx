// components/Showcase.jsx
import React from "react";
import UserBadge from "./UserBadge";
import StatusToggle from "./StatusToggle";
import TaskList from "./TaskList";
import ProfileViewer from "./ProfileViewer";

const Showcase = () => {
  return (
    <div className="component-container">
      <h2>🛠️ Component Showcase</h2>

      <h4>🔹 User Badge </h4>
      <UserBadge />
      <UserBadge />

      <h4>🔁 Status Toggle</h4>
      <StatusToggle />

      <h4>📋 Task List Manager</h4>
      <TaskList />

      <h4>👤 Profile Viewers</h4>
      <ProfileViewer name="Tishaa" email="tishaa@example.com" isPremiumUser={true} />
      <ProfileViewer name="Dhwani" email="dhwani@example.com" isPremiumUser={false} />
    </div>
  );
};

export default Showcase;
