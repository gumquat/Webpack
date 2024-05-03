import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import holbertonLogo from './holberton-logo.jpg'; // Import the Holberton logo
import { Notifications } from '../Notifications/Notifications';


/* in-file webpage footer module */
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
        {Notifications()}
        <header className="App-header">
          <img src={holbertonLogo} className="App-logo" alt="logo" />
          <h1>
            School dashboard
          </h1>
        </header>
        <body className="App-body">
        <p>Login to access the full dashboard</p>
          <div className='login-form'>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
            <button>OK</button>
          </div>
        </body>

        {footerContent()}
      </div>
    );
  }

export default App;
