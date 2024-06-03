import React from 'react';
import holbertonLogo from '../assets/holbertonLogo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';

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

const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
  };
};

const mapDispatchToProps = {
  logout,
};

const Header = ({ user, logout }) => {
  return (
    <header className={css(styles.header)}>
      <img src={holbertonLogo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.title)}>
        School dashboard
      </h1>
      {user.get('isLoggedIn') && (
        <div id="logoutSection" className={css(styles.section)}>
          <p>
            Welcome {user.get('email')} <button alt="logOut" className='logoutButton' onClick={logout}>logout</button>
          </p>
        </div>
      )}
    </header>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
