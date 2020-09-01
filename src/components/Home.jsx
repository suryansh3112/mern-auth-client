import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Home() {
  const { userData, setUserData } = useContext(UserContext);
  let salutation = 'Welcome to Home Page';
  if (userData.user) {
    salutation = `Welcome ${userData.user.username}`;
  }
  return (
    <div>
      <h1>{salutation}</h1>
      <h1>lskjdfkljslfjl</h1>
      <h1>lskjdfkljslfjl</h1>
      <h1>lskjdfkljslfjl</h1>
      <h1>lskjdfkljslfjl</h1>
      <h1>lskjdfkljslfjl</h1>
      <h1>lskjdfkljslfjl</h1>
      <h1>lskjdfkljslfjl</h1>
      <h1>lskjdfkljslfjl</h1>
      <h1>lskjdfkljslfjl</h1>
      <h1>lskjdfkljslfjl</h1>
      <h1>lskjdfkljslfjl</h1>
      <h1>lskjdfkljslfjl</h1>
    </div>
  );
}

export default Home;
