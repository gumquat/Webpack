import React from 'react';
import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  loginForm: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    top: '3rem',
    left: '3rem',
    '@media (max-width: 900px)': {
      alignItems: 'center',
    },
  },
  loginParagraph: {
    fontWeight: '400',
    fontSize: '1.5rem',
    margin: '4rem 2rem 2rem 4rem',
  },
  labelInput: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  label: {
    paddingRight: '0.5rem',
  },
  input: {
    padding: '0.5rem',
    border: '1px solid #000',
    borderRadius: '4px',
  },
  button: {
    padding: '0.5rem 1rem',
    marginTop: '1rem',
  },
});

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    // Add logic to handle login submission
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={css(styles.loginForm)}>
      <p className={css(styles.loginParagraph)}>
        Login to access the full dashboard
      </p>
      <form onSubmit={handleLoginSubmit}>
        <div className={css(styles.labelInput)}>
          <label className={css(styles.label)} htmlFor="email">Email:</label>
          <input
            className={css(styles.input)}
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className={css(styles.labelInput)}>
          <label className={css(styles.label)} htmlFor="password">Password:</label>
          <input
            className={css(styles.input)}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <input className={css(styles.button)} type="submit" value="OK" />
      </form>
    </div>
  );
}

export default Login;