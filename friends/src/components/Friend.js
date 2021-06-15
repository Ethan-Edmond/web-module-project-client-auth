import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import FriendForm from './FriendForm';

function Friend({setFriends, name, email, age, id}){
  const [isEditing, setIsEditing] = useState(false);

  const deleteFriend = () => {
    axiosWithAuth().delete(`/friends/${id}`)
      .then(res =>
        setFriends(res.data))
      .catch(err => alert(err));
  };

  const updateFriend = (friend) => {
    axiosWithAuth().put(`/friends/${id}`, friend)
      .then(res => setFriends(res.data))
      .catch(err => alert(err));
    setIsEditing(false);
  };

  return(
    <div>
      {isEditing && <FriendForm friendFunc={updateFriend}/>}
      <h4>{name}</h4>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <button onClick={() => setIsEditing(!isEditing)}>Toggle Editing</button>
      <button onClick={deleteFriend}>Delete Friend</button>
    </div>
  );
}

export default Friend;
