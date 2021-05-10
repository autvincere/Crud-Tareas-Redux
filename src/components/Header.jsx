import React from 'react';
import {
     AppBar,
     Toolbar,
     Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as SVGLogo } from '../assets/icons/clipboard.svg';

const useStyles = makeStyles((theme) => ({
     root: {
          // flexGrow: 1,
          width: '100vw'
     },
     titleCenter: {
          justifyContent: 'center',
     },
     logo: {
          marginLeft: '8px',
          borderRadius: '5px',
          width: '43px'
     },
}));

const Header = () => {
     const classes = useStyles();

     return (
         <div className={classes.root}>
               <AppBar position="static" color="primary">
                    <Toolbar className={classes.titleCenter}>
                         <Typography variant="h6">Mantenedor de Tareas</Typography>
                         <SVGLogo className={classes.logo} />
                    </Toolbar>
               </AppBar>
          </div>
     )
}

export default Header
