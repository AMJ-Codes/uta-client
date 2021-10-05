let APIURL = '';

switch (window.location.hostname) {
    
    case 'localhost' || '127.0.0.1':
        break;
    case 'uta-client.herokuapp.com':
        APIURL = 'https://uta.herokuapp.com'
}

export default APIURL;