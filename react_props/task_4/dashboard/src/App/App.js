import React from "react";
import './App.css';
import Notifications from "../Notifications/Notifications";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

function App({ isLoggedIn }) {
  // const [isLoggedIn] = React.useState(false);

  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <body>
          <div className="App-body">
            {isLoggedIn ? <CourseList /> : <Login />}
          </div>
        </body>
        <Footer />
      </div>
    </>
  );
}

// is a bool...
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
// ...defautls to false
App.defaultProps = {
  isLoggedIn: false,
};

export default App;