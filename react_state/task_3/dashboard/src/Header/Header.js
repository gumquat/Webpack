import React, { useContext } from 'react';
import holbertonLogo from '../assets/holbertonLogo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    padding: '1rem',
  },
  logo: {
    height: '12rem',
    pointerEvents: 'none',
  },
  title: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    fontSize: '3rem',
    color: 'red',
    fontWeight: 700,
    marginLeft: '1rem',
  },
  section: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    fontSize: '1rem',
    color: 'black',
    fontWeight: 200,
    marginLeft: '1rem',
  }
});


const Header = () => {
  const { user, logOut } = useContext(AppContext);
  return (
    <header className={css(styles.header)}>
      <img src={holbertonLogo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.title)}>
        School dashboard
      </h1>
      {user.isLoggedIn && (
        <div id="logoutSection" className={css(styles.section)}>
          <p>
            Welcome {user.email} <button alt="logOut" className='logoutButton' onClick={logOut}>logout</button>
          </p>
        </div>
      )}
    </header>
  );
}

export default Header;
