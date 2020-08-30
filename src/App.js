import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Contact, Register, Login } from './components';
import UserContext from './context/UserContext';
import axios from 'axios';
import './App.css';
function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-token');
      if (token === null) {
        localStorage.setItem('auth-token', '');
        token = '';
      }
      const tokenRes = await axios.post(
        'http://localhost:5000/users/tokenIsValid',
        null,
        { headers: { 'x-auth-token': token } }
      );
      if (tokenRes.data) {
        const userRes = await axios.get('http://localhost:5000/users/', {
          headers: { 'x-auth-token': token }
        });
        setUserData({
          token,
          user: userRes.data
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
