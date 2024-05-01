import React from 'react';
import './App.css';
import holbertonLogo from './holberton-logo.jpg'; // Import the Holberton logo

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <p>Copyright 2024 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
