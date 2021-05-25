import React from 'react'
import { withRouter, Link, useHistory } from 'react-router-dom'
import { Tabs, Tab, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
     root: {
          marginBottom: '10px'
     },
}));

const TabsMenu = () => {
     const classes = useStyles();
     const history = useHistory();

     return (
          <Paper className={classes.root}>
                <Tabs
                     value={
                         history.location.pathname !== ""
                           ? history.location.pathname
                           : false
                       }
               >
                    {console.log(history.location.pathname)}

                    <Tab
                         // onClick={() => handleClick()}
                         value={'/'}
                         label="Tareas"
                         component={Link}
                         to={'/'}
                    />
                       <Tab
                         value={'/active'}
                         label="Active"
                         component={Link}
                         to={'/active'}
                    />
                    <Tab
                         // onClick={() => handleClick()}
                         value={'/completed'}
                         label="Completed"
                         component={Link}
                         to={'/completed'}
                    />
                 
               </Tabs>
          </Paper>
     )
}

export default withRouter(TabsMenu)
