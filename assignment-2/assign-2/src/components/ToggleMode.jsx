import React from 'react';

function ToggleMode({ darkMode, toggleTheme }) {
  return (
    <div className="toggle-container">
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>{darkMode ? 'Dark Mode On' : 'Light Mode On'}</p>
    </div>
  );
}

export default ToggleMode;
