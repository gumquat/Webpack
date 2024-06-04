import React from 'react';

// Define a default user object
const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

// Define a default logOut function
const defaultLogOut = () => {
  console.log('Logging out...');
};

// Create a React context
const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

export default AppContext;
