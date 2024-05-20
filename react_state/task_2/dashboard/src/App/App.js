import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';

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

class App extends React.Component {
  constructor(props) {
    super(props);

    // Mock data for courses and notifications
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

    // Initialize the component state with user and logOut from the context
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: () => {
        this.setState({
          user: {
            email: '',
            password: '',
            isLoggedIn: false,
          },
        });
      },
    };
  }

  // MOUNT AND UNMOUNT FUNCTIONS //
  // Add event listener for keydown event
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  // Remove event listener for keydown event
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }


  // Handle keydown event to log out user
  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key.toLowerCase() === 'h') {
      console.log('Logging you out');
      this.logOut();
    }
  }

  // Handle displaying of drawer
  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  // Handle hiding of drawer
  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  // logIn function
  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  // logOut function
  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  };

  render() {
    const { displayDrawer, user } = this.state;
    const { isLoggedIn } = user;

    return (
      <>
        {/* Render the Notifications component */}
        <Notifications
          listNotifications={this.listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className={css(styles.app)}>
          {/* Render the Header component */}
          <Header />
          <div className={css(styles.body)}>
            {/* Render either the CourseList or Login component based on isLoggedIn state */}
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses} />
                <BodySection title="News from the School">
                  <p>News from the School: School is CANCELED!</p>
                </BodySection>
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
          </div>
          {/* Render the Footer component */}
          <Footer className={css(styles.footer)} />
        </div>
      </>
    );
  }
}

// REMOVED at beginning of TASK 2 //
// // Define prop types for the App component
// App.propTypes = {
//   isLoggedIn: PropTypes.bool,
//   logOut: PropTypes.func,
// };

// // Define default props for the App component
// App.defaultProps = {
//   isLoggedIn: false,
//   logOut: () => {},
// };

export default App;