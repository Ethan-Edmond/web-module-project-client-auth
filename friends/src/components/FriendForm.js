import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

function FriendForm({ setFriends }){
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
    axiosWithAuth().post('/friends', {
      ...formFriend,
      age: Number(formFriend.age)
    })
      .then(res => setFriends(res.data))
      .catch(err => alert(err));
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
      <button>Add Friend</button>
    </form>
  );
}

export default FriendForm;
