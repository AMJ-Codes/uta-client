import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundColor: `#5b5b5b`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover', 
    },
  }));

  export default function Background() {
    const classes = useStyles();
    const [checked,setChecked] = useState(false);
    useEffect(()=> {
        setChecked(true);
    }, [])
    return ( 
    <div className={classes.root}></div>
    )
  }