import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
  <nav>
    <h3>Friends</h3>
    <ul>
      <Link to='/login'>Login</Link>
    </ul>
  </nav>
  );
}

export default Header;
