import React, { createContext, useState } from 'react';

// Define default user object
const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

// Define default logOut function
const defaultLogOut = () => {
  // Logout logic here
};

// Create context
export const AppContext = createContext();

// Create context provider
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  const logOut = () => {
    defaultLogOut();
    setUser(defaultUser);
  };

  return (
    <AppContext.Provider value={{ user, logOut }}>
      {children}
    </AppContext.Provider>
  );
};