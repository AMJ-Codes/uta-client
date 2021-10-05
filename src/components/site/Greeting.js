import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

// Adds the elevation scroll property --> blur beneath appbar.

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '40vh',
        fontFamily: 'Bebas Neue',
    },
    appbar: {
        background: 'none',
    },
    appbarWrapper: {
        width: "80%",
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    colorText: {
        color: '#9999FF',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '4.5rem',
    },
}));

function Greeting() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, [])

    return (
        <div className={classes.background}>
        <div className={classes.root}>
            <CssBaseline />
            <ElevationScroll>
                <AppBar style={{ background: '#5e5a47' }} className={classes.appbar} elevation={0}>
                    <Toolbar  className={classes.appbarWrapper}>
                        <h1 className={classes.appbarTitle}><span style={{ color: '#FFD700' }}> Uta. </span> What's playing?</h1>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </div>
        </div>
    );
}

export default Greeting;
