import React from 'react';
import './App.css';
import User from './Components/User';
import Followers from './Components/Followers';

function App() {
  return (
    <div className="App">
     <h1>React Github User Card</h1>
      <User />
      <Followers />
    </div>
  );
}

export default App;
