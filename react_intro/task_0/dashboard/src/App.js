import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import holbertonLogo from './holberton-logo.jpg'; // Import the Holberton logo

/* FOOTER CONTENT - modulizede */
const footerContent = () => {
  return (
    <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
  )
}

  /* WEB PAGE */
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
      {footerContent}
    </div>
  );
}

export default App;
