import React from "react";
import './App.css';
import Notifications from "../Notifications/Notifications";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <body>
          <div className="App-body">
          <Login />
          </div>
        </body>
        <Footer />
      </div>
    </>
  );
}

export default App;