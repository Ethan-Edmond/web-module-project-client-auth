import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

function Friend({setFriends, name, email, age, id}){

  const deleteFriend = () => {
    axiosWithAuth().delete(`/friends/${id}`)
      .then(res =>
        setFriends(res.data))
      .catch(err => alert(err));
  };

  return(
    <div>
      <h4>{name}</h4>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <button>Edit Friend</button>
      <button onClick={deleteFriend}>Delete Friend</button>
    </div>
  );
}

export default Friend;
