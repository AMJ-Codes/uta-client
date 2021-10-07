import React, {useState} from 'react';
import CommentIndex from './CommentIndex';
// import Profile from './Profile';
import Home from './Home';
import {Link} from 'react-router-dom';
import './NavBar.css';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    NavItem,
    Button,
    Nav,
} from 'reactstrap';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const NavBar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    return(
        <Navbar color="faded" light expand="md" className='navbar'>
            {/* <NavbarBrand href="/">Uta</NavbarBrand> */}
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml" navbar>
                    <NavItem className='nav-links'>
                        <ul >
                            <li><Link to='/commentfeed'><HomeIcon/></Link></li>
                            <li><Link to='/createcomment'><EventIcon/></Link></li>
                            <li><Link to='/songSearch'><MusicNoteIcon/></Link></li>
                        </ul>
                    </NavItem>
            <NavbarBrand className='nav-title' href="/"><h1>Uta!</h1></NavbarBrand>
                    <NavItem>
                        {/* <Switch>
                         <Route exact path='/commentindex'><CommentIndex /></Route>
                         <Route exact path='/createcomment'><CreateComment /></Route>
                         <Route exact path='/profile'><Profile /></Route>
                     </Switch> */}
                    </NavItem>
                    <NavItem>
                        <Button className='nav-button' onClick={props.clickLogout} href='/'><ExitToAppIcon/></Button>
                    </NavItem>
                    
                </Nav>
            </Collapse>
        </Navbar>

    );
}

export default NavBar;