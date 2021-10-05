import {useState} from 'react';
import AuthMVP from "./AuthMVP";

const AuthLanding = (props) => {

    const [sessionToken, setSessionToken] = useState('');

    const updateToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);
        console.log(sessionToken);
      }

    return(
        <div>
            <AuthMVP updateToken={props.updateToken}/>
        </div>
    )
}

export default AuthLanding;