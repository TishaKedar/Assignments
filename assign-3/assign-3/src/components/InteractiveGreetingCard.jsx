// src/components/InteractiveGreetingCard.jsx

import React, { useState } from 'react';
import '../App.css';

const InteractiveGreetingCard = () => {
  const [userType, setUserType] = useState('guest');
  const [timeOfDay, setTimeOfDay] = useState('morning');

  const getGreetingMessage = () => {
    switch (userType) {
      case 'guest':
        return 'Hello! Welcome to Perminant.';
      case 'returning':
        return 'Welcome back to Perminant!';
      case 'admin':
        return 'Admin access granted.';
      default:
        return '';
    }
  };

  return (
    <div className={`card ${timeOfDay}`}>
      <h2>{getGreetingMessage()}</h2>
      <p>Have a great {timeOfDay}!</p>

      <div style={{ marginTop: '20px' }}>
        <label>
          User Type:&nbsp;
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="guest">guest</option>
            <option value="returning">returning</option>
            <option value="admin">admin</option>
          </select>
        </label>

        <br /><br />

        <label>
          Time of Day:&nbsp;
          <select value={timeOfDay} onChange={(e) => setTimeOfDay(e.target.value)}>
            <option value="morning">morning</option>
            <option value="afternoon">afternoon</option>
            <option value="evening">evening</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default InteractiveGreetingCard;
