import React from 'react';
import holbertonLogo from '../assets/holbertonLogo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    backgroundColor: '#282c34',
    padding: '20px',
    color: 'white',
  },
  logo: {
    width: '200px',
    height: 'auto',
  },
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={holbertonLogo} className={css(styles.logo)} alt="logo" />
      <h1>
        School dashboard
      </h1>
    </header>
  );
}

export default Header;
