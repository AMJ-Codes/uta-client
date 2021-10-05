import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
//import APIURL from '../helpers/environment';

const CommentEdit = (props) => {
    const [editSubject, setEditSubject] = useState(props.commentToUpdate.subject);
    const [editComment, setEditComment] = useState(props.commentToUpdate.comment);
    const [editDate, setEditDate] = useState(props.commentToUpdate.date);
    const commentUpdate = (event, index) => {  // Look into this more // changed 2nd event to index.
        event.preventDefault();
        //fetch(`${APIURL}/log/${props.eventToUpdate.id}`, {
        fetch(`http://localhost:3000/log/update/${props.eventToUpdate.id}`, {  
            method: 'PUT',
            body: JSON.stringify({log: {subject: editSubject, comment: editComment, date: editDate}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                //'Authorization': props.token
                'Authorization' : `Bearer ${props.token}`
            })
        }) .then((res) => {
            props.fetchComments();
            props.updateOff();
        }) .catch(function(error) {
            console.log('Error with fetch: ' + error.message);
            throw error;
        });
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Edit a Comment</ModalHeader>
            <ModalBody>
                <Form onSubmit={commentUpdate}>
                <FormGroup>
                    <Label htmlFor="subject">Edit Subject: </Label>
                    <Input type="subject" value={editDate} onChange={(e) => setEditSubject(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="comment">Edit Comment: </Label>
                    <Input name="comment" value={editComment} onChange={(e) => setEditComment(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="datetime">Edit Date: </Label>
                    <Input name="datetime" value={editDate} onChange={(e) => setEditDate(e.target.value)}/>
                </FormGroup>
                <Button type="submit">Update the Comment!</Button>  
                </Form>    
            </ModalBody> 
        </Modal>
    )
}

export default CommentEdit;