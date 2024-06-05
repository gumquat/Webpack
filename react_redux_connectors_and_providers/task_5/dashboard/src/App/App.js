import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import AppContext from './AppContext';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from '../actions/uiActionCreators';

// Styles for the App component
const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },

  body: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '5px solid red',
    borderBottom: '5px solid red',
    width: '100%',
    padding: '2rem 0',
    position: 'relative',
  },

  footer: {
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontWeight: 300,
    fontSize: '1.3rem',
    fontStyle: 'italic',
    width: '100%',
    textAlign: 'center',
    padding: '1rem',
  },
});

// map to store
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible'),
  };
}

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest, // Map the loginRequest action creator to the login prop
};

const App = ({
  isLoggedIn,
  displayDrawer,
  displayNotificationDrawer,
  hideNotificationDrawer,
  logIn, // Receive the login prop from Redux
}) => {
  // Mock data for courses and notifications
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  // Initialize the component state
  const [user, setUser] = useState({
    email: '',
    password: '',
    isLoggedIn: false,
  });

  // Handle keydown event to log out user
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key.toLowerCase() === 'h') {
      console.log('Logging you out');
      logOut();
    }
  };

  // Add event listener for keydown event
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Handle logging out the user
  const logOut = () => {
    setUser({
      email: '',
      password: '',
      isLoggedIn: false,
    });
    console.log('Logged out');
  };


  return (
    <AppContext.Provider value={{ user, logOut }}>
      <>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer} // Use the prop instead of state
          handleDisplayDrawer={displayNotificationDrawer} // Using the prop instead of a local function
          handleHideDrawer={hideNotificationDrawer} // Using the prop instead of a local function
        />
        <div className={css(styles.app)}>
          <Header />
          <div className={css(styles.body)}>
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
                <BodySection title="News from the School">
                  <p>News from the School: School is CANCELED!</p>
                </BodySection>
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={logIn} />
              </BodySectionWithMarginBottom>
            )}
          </div>
          <Footer className={css(styles.footer)} />
        </div>
      </>
    </AppContext.Provider>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  displayDrawer: PropTypes.bool.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
