import React from 'react';
import holbertonLogo from '../assets/holbertonLogo.jpg';
import { StyleSheet, css } from 'aphrodite';

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
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={holbertonLogo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.title)}>
        School dashboard
      </h1>
    </header>
  );
}

export default Header;
