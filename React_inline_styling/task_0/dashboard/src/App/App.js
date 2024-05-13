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
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
  ]

  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <Notifications listNotifications={listNotifications} />
        <body>
          <div className="App-body">
            {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
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