import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import FriendForm from './FriendForm';
import Friend from './Friend';

function FriendsList(){
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('/friends')
      .then(res => setFriends(res.data))
      .catch(err => alert(err));
  }, []);

  const addFriend = (friend) => {
    axiosWithAuth().post('/friends', friend)
      .then(res => setFriends(res.data))
      .catch(err => alert(err));
  };

  return (
    <div>
      <FriendForm friendFunc={addFriend}/>
      {
        friends.map(friend => {
          return <Friend key={friend.id} setFriends={setFriends} {...friend}/>;
        })
      }
    </div>
  );
};

export default FriendsList;
