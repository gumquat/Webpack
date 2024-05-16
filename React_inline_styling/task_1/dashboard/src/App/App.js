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

    return (
      <>
        <Notifications listNotifications={this.listNotifications} />
        <div className={css(styles.app)}>
          <Header />
          <div className={css(styles.body)}>
              {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses}/>
                <BodySection title="News from the School">
                    <p>News from the School: School is CANCELED!</p>
                </BodySection>
              </BodySectionWithMarginBottom>
              ) : (
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login />
              </BodySectionWithMarginBottom>
              )}
            </div>
          <Footer className={css(styles.footer)} />
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
