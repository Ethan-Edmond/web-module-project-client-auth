import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

function FriendForm({ friendFunc }){
  const [formFriend, setFormFriend] = useState({
    name: '',
    age: '0',
    email: ''
  });

  const handleChange = (e) => {
    setFormFriend({
      ...formFriend,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    friendFunc({
      ...formFriend,
      age: Number(formFriend.age)
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formFriend.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        value={formFriend.age}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formFriend.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default FriendForm;
