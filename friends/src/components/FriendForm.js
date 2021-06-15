import React, { useState } from 'react';
import axios from 'axios';

function FriendForm(){
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
    axios.post('http://localhost:5000/api/friends', {
      ...formFriend,
      age: Number(formFriend.age)
    }, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then(res => console.log(res));
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
