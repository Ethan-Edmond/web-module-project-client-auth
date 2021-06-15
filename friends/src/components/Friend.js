import React from 'react';

function Friend({name, email, age, id}){
  return(
    <div>
      <h4>{name}</h4>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Friend;
