import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CommentCreate from '../../comments/CommentCreate';
import CommentTable from '../../comments/CommentTable';
import CommentEdit from '../../comments/CommentEdit';
import './CommentIndex.css';
//import APIURL from '../../helpers/environment';

const CommentIndex = (props) => {
    const [comments, setComments] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [commentToUpdate, setCommentToUpdate] = useState({});

    const fetchComments = () => {
        //fetch(`${APIURL}/log`, {
        //${event.id}
        fetch(`http://localhost:3000/log/mine`, {  
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/json',
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
        <Container className='add-comment'>
            <Row>
            <Col md="9">
                    <CommentTable comments={comments} editUpdateComment={editUpdateComment} updateOn={updateOn} fetchComments={fetchComments} token={props.token} />
                </Col>
                <Col md="3">
                    <CommentCreate fetchComments={fetchComments} token={props.token}/>
                </Col>
                {updateActive ? <CommentEdit commentToUpdate={commentToUpdate} updateOff={updateOff} token={props.token} fetchComments={fetchComments}/> : <></>}
            </Row>
        </Container>
    )
};

export default CommentIndex;