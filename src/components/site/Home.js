import {Redirect, Route, Switch} from 'react-router-dom';
//import { Container, Row, Col } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import './Home.css';
import CommentIndex from './CommentIndex';
import CommentFeed from '../../comments/CommentFeed';
import SongSearch from '../spotify/SongSearch';

import NavBar from './Navbar';
//import AuthMVP from '../Auth/AuthMVP';

const Home = (props) => {

    // const [comments, setComments] = useState([]);
    // const [updateActive, setUpdateActive] = useState(false);
    // const [commentToUpdate, setCommentToUpdate] = useState({});

    const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

    return(
        <div className='home-page'>
            <NavBar clickLogout={clearToken}/>
            
            <Switch>
                <Route exact path='/' component={() => (<Redirect to='/commentfeed' />)} />
                <Route exact path='/commentfeed'><CommentFeed /></Route>
                <Route exact path='/createcomment'><CommentIndex token={props.token} /></Route>
                <Route exact path='/songsearch'><SongSearch /></Route>
            </Switch>
            
        </div>
    );
};

export default Home;

