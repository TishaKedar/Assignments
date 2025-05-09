// App.jsx
import React from 'react';
import GreetingCard from './components/GreetingCard';
import InteractiveGreetingCard from './components/InteractiveGreetingCard';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Level 1 Greeting Card</h1>
      <GreetingCard />

      <h1>Level 2 Interactive Greeting Card</h1>
      <InteractiveGreetingCard />
    </div>
  );
}

export default App;
