import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../redux/action-creators/login';

const handleSubmit = (e, login) => {
  e.preventDefault();
  login(formData.username, formData.password);
};

const Login = ({ isAuthenticated, login }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  if (isAuthenticated) {
    return <Redirect to={{ pathname: '/list' }} />;
  }
  return (
    <div>
      <form onSubmit={(e, login) => handleSubmit(e, login)}>
        <input
          placeholder='username'
          value={formData.username}
          onChange={e => setFormData({ ...formData, username: e.target.value })}
        />
        <input
          placeholder='password'
          value={formData.password}
          onChange={e => setFormData({ ...formData, password: e.target.value })}
        />
        <input type='submit' value='Login' />
      </form>
    </div>
  );
};

const mapStateToProps = state => {};

export default connect(mapStateToProps)(Login);
