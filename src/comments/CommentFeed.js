import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CommentFeedTable from './CommentFeedTable';
import CommentEdit from './CommentEdit';
import './CommentFeed.css';
//import APIURL from '../helpers/environment';

const CommentFeed = (props) => {
    const [comments, setComments] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [commentToUpdate, setCommentToUpdate] = useState({});

    const fetchComments = () => {
        //fetch(`${APIURL}/log/all`, {
        fetch('http://localhost:3000/log/all', {  
        method: "GET",
        headers: new Headers({
            'Content-Type': "application/json",
            'Authorization': `Bearer ${props.token}`
        })
    }).then((res) => res.json())
    .then((logData) => {
        setComments(logData);
    })
    };

    const editUpdateComment = (event) => {
        setCommentToUpdate(event);
        console.log(event);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchComments();
    }, []);

    return(
        <Container className='comment-feed'>
            <Row>
                <Col md='12'>
                    <CommentFeedTable comments={comments} editUpdateComment={editUpdateComment} 
                    updateOn={updateOn} fetchComments={fetchComments} token={props.token}/>
                </Col>
                {updateActive ? <CommentEdit commentToUpdate={commentToUpdate}
                updateOff={updateOff} token={props.token} fetchComments={fetchComments}/> : <></>}
            </Row>
        </Container>
    )
};

export default CommentFeed;