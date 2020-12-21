import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';

const AuthHOC = (props) => {
  const location = useLocation();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  //console.log('username');
  if (!userInfo || (userInfo && !userInfo.name))
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: location.pathname, requireLogin: true },
        }}
      />
    );
  return <Route {...props} />;
};

export default AuthHOC;
