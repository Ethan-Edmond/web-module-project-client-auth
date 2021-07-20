import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
  <nav>
    <h3>Friends</h3>
    <ul>
      <Link to='/login'>Login</Link>
      <button onClick={logout}>Logout</button>
    </ul>
  </nav>
  );
}

export default Header;
