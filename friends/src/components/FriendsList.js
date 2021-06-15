import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FriendForm from './FriendForm';
import Friend from './Friend';

function FriendsList(){
  const [friends, setFriends] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/api/friends', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then(res => setFriends(res.data))
      .catch(err => alert(err));
  }, []);

  return (
    <div>
      <FriendForm/>
      {
        friends.map(friend => {
          return <Friend key={friend.id} {...friend}/>;
        })
      }
    </div>
  );
};

export default FriendsList;
