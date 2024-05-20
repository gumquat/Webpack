import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import AppContext from './AppContext';

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

    // Initialize the component state
    this.state = {
      displayDrawer: false, // Add the displayDrawer state
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    };
  }

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
    this.setState({ displayDrawer: true }); // Set displayDrawer to true
  };

  // Handle hiding of drawer
  handleHideDrawer = () => {
    this.setState({ displayDrawer: false }); // Set displayDrawer to false
  };


  // Handle logging out the user
  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
    console.log('Logged out');
  };
  // Handle logging in the user
  logIn = (email, password) => {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
    console.log('Logged in');
  };


  render() {
    const { displayDrawer } = this.state; // Access the displayDrawer state
    const { listCourses, listNotifications, user } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
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
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
          </div>
          <Footer className={css(styles.footer)} />
        </div>
        </>
        </AppContext.Provider>
    );
  }
}

export default App;