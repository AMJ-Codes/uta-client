import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/site/Home';
import AuthLanding from './components/Auth/AuthLanding';
// import APIURL from './helpers/environment';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <Home token={sessionToken}/>
    : <AuthLanding updateToken={updateToken}/>)
  }

  const classes = makeStyles();
  return(
    <div className='App'>
      <div className={classes.root}>
    
    <Router>
      
      {/* <Greeting /> */}
      {protectedViews()}
      {/* <NavBar clickLogout={clearToken}/> */}
    </Router>
    
      </div>
    </div>
  );
}

export default App;
