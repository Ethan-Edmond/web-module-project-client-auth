import React, { useState } from 'react';
import axios from 'axios';

function Login(props){
  const [formVal, setFormVal] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormVal({
      ...formVal,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formVal);
    axios.post('http://localhost:5000/api/login', formVal)
      .then(res => {
        window.localStorage.setItem('token', res.data.payload);
        props.history.push('/friends');
      })
      .catch(err => alert(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formVal.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formVal.password}
        onChange={handleChange}
      />
      <button>Login</button>
    </form>
  );
}

export default Login;
