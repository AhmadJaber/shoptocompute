import React, { useEffect, useState } from 'react';

function getUserFromLocalStorage() {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : { userName: null, token: null };
}

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(getUserFromLocalStorage());
  const [height, setHeight] = useState(0);
  const [alert, setAlert] = React.useState({
    show: false,
    msg: '',
    type: 'success',
  });
  console.log('user', user);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setHeight(window.pageYOffset);
    });

    console.log('scrolled');
    return () => window.removeEventListener('scroll', () => {});
  });

  const userLogin = (newUser) => {
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const userLogout = () => {
    setUser({ token: null, userName: null });
    localStorage.removeItem('user');
  };

  // handle alert
  const showAlert = ({ msg, type = 'success' }) => {
    setAlert({ show: true, msg, type });
  };

  const hideAlert = () => {
    setAlert({ ...alert, show: false });
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userLogout,
        showAlert,
        hideAlert,
        alert,
        user,
        height,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
