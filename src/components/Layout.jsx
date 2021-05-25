import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './Header'
import Footer from './Footer'
import TabsMenu from './TabsMenu'
const useStyles = makeStyles((theme) => ({
     root: {

          minHeight: '100vh',
     },
}));

const Layout = ({ children }) => {
     const classes = useStyles();

     return (
          <Grid
               container
               className={classes.root}
               direction="column"
               justify="flex-start"
               alignItems="center"
               alignContent="center"
               wrap="nowrap"
          >
               <Header />
               <TabsMenu />
               {children}
               <Footer />
          </Grid>
     )
}

export default Layout
