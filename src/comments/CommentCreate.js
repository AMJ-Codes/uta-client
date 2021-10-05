import React, {useState, useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import APIURL from '../helpers/environment';

const Comment = (props) => {
    const [subject, setSubject] = useState('');
    const [comment, setComment] = useState('');
    const [date, setDate] = useState('');


    // useEffect(() => {
    //     handleSubmit();
    // }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        //fetch(`${APIURL}/log/`, {
        fetch(`http://localhost:3000/log/create/`, {  
            method: 'POST',
            body: JSON.stringify({log: {subject: subject, comment: comment, date: date}}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${props.token}`
            })
        }).then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setSubject('');
            setComment('');
            setDate('');
            props.fetchEvents();
        })
    };

    return(
        <>
            <h3>Comment Section</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="subjectString">Subject: </Label>
                    <Input type="subjectString" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="comment">Comment: </Label>
                    <Input name="comment" value={comment} onChange={(e) => setComment(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="date">Date: </Label>
                    <Input name="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        </>
    );
};

export default Comment;

