import React from "react";
import './App.css';
import Notifications from "../Notifications/Notifications";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    this.listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ];
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key.toLowerCase() === 'h') {
      console.log('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    // CourseListRow styling
    const rowStyle = { backgroundColor: '#f5f5f5ab' };
    const headerStyle = { backgroundColor: '#deb5b545' };

    return (
      <>
        <Notifications />
        <div className="App">
          <Header />
          <Notifications listNotifications={this.listNotifications} />
          <body>
            <div className="App-body">
              {isLoggedIn ? (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={this.listCourses} />
                  <BodySection title="News from the School">
                  <p>News from the School: School is CANCELED!</p>
              </BodySection>
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title="Log in to continue">
                  <Login />
                </BodySectionWithMarginBottom>
              )}
            </div>
          </body>
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
