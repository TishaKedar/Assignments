import './App.css';
import ToggleMode from './components/ToggleMode';
import Form from './components/Form';
import { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <ToggleMode darkMode={darkMode} toggleTheme={toggleTheme} />
      <Form darkMode={darkMode} />
    </div>
  );
}

export default App;
