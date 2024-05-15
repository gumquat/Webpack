import React from 'react';
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
  },
  loginParagraph: {
    fontWeight: '400',
    fontSize: '1.5rem',
    margin: '4rem 2rem 2rem 4rem',
  },
  label: {
    paddingRight: '0.5rem',
  },
  input: {
    marginRight: '1rem',
    padding: '0.5rem',
    border: '1px solid #000',
    borderRadius: '4px',
  },
  button: {
    padding: '0.5rem 1rem',
  },
});

function Login() {
  return (
      <div className={css(styles.loginForm)}>
        <p className={css(styles.loginParagraph)}>
          Login to access the full dashboard
        </p>
          <label className={css(styles.label)} htmlFor="email" >Email:</label>
          <input className={css(styles.input)} type="text" id="email" name="email" />
          <label className={css(styles.label)} htmlFor="password" >Password:</label>
          <input className={css(styles.input)} type="password" id="password" name="password" />
          <button className={css(styles.button)} type="submit" >OK</button>
      </div>
  );
}

export default Login;
