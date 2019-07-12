import React from 'react';

const Login = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <div>redir</div>;
  }
  return <div>hello</div>;
};

export default Login;
