import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';

// css styling.

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '100vh',
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
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    colorText:{
        color: '#9999FF',
    },
    container: {
        textAlign: 'center',
    },
    title:{
        color: '#fff',
        fontSize: '4.5rem',
    },
    goDown: {
        color: '#9999FF',
        fontSize: '3em'
    },
}));

export default function Header() {
    const classes = useStyles();
    const [checked,setChecked] = useState(false);
    useEffect(()=> {
        setChecked(true);
    }, [])

// content

    return ( 
    <div className={classes.root}>
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>Uta: What's Playing?</h1>
            <IconButton>
                <SortIcon className={classes.icon} />
            </IconButton>
            </Toolbar>
        </AppBar>
    </div>
    );
}

/* <Collapse 
in={checked} 
{ ...(checked ? { timeout: 1000 }: {})} 
  collapsedHeight={50}
>
<div className={classes.container}>
    <IconButton>
        <ExpandMoreIcon className={classes.goDown} />
    </IconButton>
</div>
</Collapse> */