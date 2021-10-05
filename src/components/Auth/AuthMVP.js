import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import Greeting from '../site/Greeting';
import APIURL from '../../helpers/environment';

const Signup = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let handleSubmit = (event) => {
        event.preventDefault();
        //fetch(`${APIURL}/user/register`, {
        fetch('http://localhost:3000/user/register', {    
            method: 'POST', 
            body: JSON.stringify({user:{email: email, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button type="submit">Sign Up</Button>
            </Form>
        </div>
    )
}

// Login Javascript --- Login 'Box'

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        //fetch(`${APIURL}/user/login`, {
        fetch('http://localhost:3000/user/login', {
            method: 'POST', 
            body: JSON.stringify({user:{email: email, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }
    
    return (
   
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}

// Page Display

const useStyles = makeStyles((theme) => ({
    text: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '30vh',
        fontFamily: 'Bebas Neue',
        color: '#FFD700', 
    },
        background: {
            minHeight: '110vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: '#5b5b5b', 
    },
        textColorWhite: {
            color: 'white',
        },
        padding: {
            padding: '50px',
        }
}));
 export default function AuthMVP(props) {
    const classes = useStyles();
    const [checked,setChecked] = useState(false);
    useEffect(()=> {
        setChecked(true);
    }, [])
    return(
        <div className={classes.background}>
        <Greeting />
        <Container className={classes.text}>
            <Row>
                <div className={classes.padding}>
                <h1>Ever wonder who's trending? <span className={classes.textColorWhite}>Yeah, us too.</span></h1>
                <h2> Sign in and let's find out. </h2>
                </div>
                <Col md="6">
                    <Signup updateToken={props.updateToken} />
                </Col>
                <Col md="6" className="login-col">
                    <Login updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
        </div>
    )
}



