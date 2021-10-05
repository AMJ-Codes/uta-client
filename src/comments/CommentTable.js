import React from 'react';
import { Table, Button } from 'reactstrap'; 
//import APIURL from '../helpers/environment';

const CommentTable = (props) => {

    const deleteComment = (event) => {
        //fetch(`${APIURL}/log/${comment.id}`, {
        //${props.deleteComment.id}
        fetch(`http://localhost:3000/log/delete/`, {  //Add '${comment.id}'
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                //'Authorization': props.token
                'Authorization' : `Bearer ${props.token}`
            })
        })
        .then(() => props.fetchComment())
    }

    const commentMapper = () => {
        return props.comments.map((comment, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{comment.id}</th>
                    <td>{comment.subject}</td>
                    <td>{comment.comment}</td>
                    <td>{comment.date}</td>
                    <td>
                        <Button color="white" onClick={() => {props.editUpdateComment(comment); props.updateOn()}}>Update</Button>
                        <Button color="white" onClick={() => {deleteComment(comment)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h3>Your Comments</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Comment</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {commentMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default CommentTable;