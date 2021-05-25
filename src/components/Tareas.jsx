import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import {
     agregarTarea,
     removerTarea,
     editarTarea,
     editarYReemplazarTarea
} from '../actions/tareasActions'

import {
     TextField,
     Button,
     Paper,
     Grid,
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

import Message from '../components/Message'

const useStyles = makeStyles((theme) => ({
     container: {
          marginTop: '30px',
          display: 'flex',
          // height: '75vh',
          alignItems: 'center'
     },
     gridTareas: {
          margin:'20px 0px'
     },
     contentTareas: {
          minWidth: '400px',
          margin: '10px 0px',
          [theme.breakpoints.down('md')]: {
               minWidth: '90%',
          },
     },
     paper: {
          maxWidth: '500px',
          padding: theme.spacing(1),
          textAlign: 'center',
          color: theme.palette.text.secondary,
     },
     paperTareas: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 6px',
          [theme.breakpoints.down('xs')]: {
               flexDirection: 'column',
          },
     },
     buttonTareas: {
          textTransform: 'inherit',
          //margin: '0px 8px',
          marginRight:'6px',
     },
     textTarea: {
          fontWeight: '400',
          textTransform: 'capitalize',
          fontSize: '1.5em',
          display: 'block',
          margin: '0px 4px', 
    },
     textDescription: {
          fontSize: '1.2em',
     },
     form: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'baseline',
          [theme.breakpoints.down('md')]: {
               flexDirection: 'column',
               alignItems: 'center'
          }

     },
     field: {
          width: '400px',
          [theme.breakpoints.down('xs')]: {
               width: 'auto'
          },
     },
     containerButtons: {
          marginLeft: '16px'  
     },
     button: {
          marginLeft: '6px',
          [theme.breakpoints.down('md')]: {
               marginLeft: '0px',
               marginTop: '15px'
          }
     }

}))

const Tareas = () => {
     const classes = useStyles();
     const [name, setName] = useState('');
     const [count, setcount] = useState(0)
     const [edit, setEdit] = useState()
     const [editMode, setEditMode] = useState(false)
     const [editName, setEditName] = useState()
     const [id, setId] = useState('')

     const [error, setError] = useState(false)
     const [ helperText, setHelperText] = useState()

     const dispatch = useDispatch();
     const tareas = useSelector(state => state.tareas.tareas);
     const tareaEdit = useSelector(state => state.tareas.tareaEditada);

     useEffect(() => {
          setEdit(tareaEdit)
          setId(tareaEdit.id)
          setEditName(tareaEdit.name)
     }, [tareaEdit]);

     const handleSubmit = e => {
          e.preventDefault();
          if(!name.trim()){
               setHelperText('Porfavor Ingrese una tarea')
               setError(true)
               return
             }
          setcount(count + 1)

          dispatch(agregarTarea(count, name))
          setName('');
          setError(false)
          setHelperText()
     };

     const handleRemove = (id) => {
          // console.log('remover', id)
          dispatch(removerTarea(id))
     }
     const handleEdit = (i) => {
          // console.log('Editar', i)
          dispatch(editarTarea(i))
          // console.log(tareaEdit)
          // const { name } = tareaEdit
          // console.log(name);
          setEditMode(true)
          setEditName(edit.name)
          setError(false)
          setHelperText()
     }

     const handleEditMode = (e) => {
          e.preventDefault();
          if(!editName.trim()){
               setHelperText('Porfavor Ingrese una tarea')
               setError(true)
               return
             }
          dispatch(editarYReemplazarTarea(id, editName))
          setEditMode(false)
          setEditName()
          setError(false)
          setHelperText()
     }

     return (
          <Grid item className={classes.container}>
               <Grid
                    className={classes.root}
                    container
                    spacing={0}
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                    alignContent="center"
               >
                    <Grid
                         container
                         direction="column"
                         justify="center"
                         alignItems="center"
                         className={classes.root}
                    >
                         <Paper className={classes.paper} elevation={3}>

                              {
                                   editMode
                                        ?
                                        <form
                                        onSubmit={handleEditMode}
                                        className={classes.form}
                                        noValidate
                                        autoComplete="off"
                                   >
                                        <TextField
                                             type="text"
                                             id="outlined-basic"
                                             label="Tarea"
                                             variant="outlined"
                                             error={error}     
                                             helperText={helperText}
                                             className={classes.field}
                                             onChange={e => setEditName(e.target.value)}
                                             value={editName}
                                        />
     
                                        <Button
                                             className={classes.button}
                                             type="submit"
                                             variant="contained"
                                             color="primary"
                                             startIcon={<EditIcon />}
                                        >
                                             Editar
                                   </Button>
                                   </form>
                                        :
                                        <form
                                        onSubmit={handleSubmit}
                                        className={classes.form}
                                        noValidate
                                        autoComplete="off"
                                   >
                                        <TextField
                                             type="text"
                                             id="outlined-basic"
                                             label="Tarea"
                                             variant="outlined"
                                             error={error}   
                                             helperText={helperText}
                                             className={classes.field}
                                             onChange={e => setName(e.target.value)}
                                             value={name}
                                        />
     
                                        <Button
                                             className={classes.button}
                                             type="submit"
                                             variant="contained"
                                             color="primary"
                                             startIcon={<AddCircleOutlineIcon />}
                                        >
                                             Crear
                                   </Button>
                                   </form>
                              }

                            

                         </Paper>
                    </Grid>

                         {
                              !tareas.length
                                   ? <Message message='Aun no hay tareas creadas' />
                                   : <Grid
                                        className={classes.gridTareas}
                                        container
                                        spacing={0}
                                        direction="column"
                                        justify="center"
                                        alignItems="center"
                                        alignContent="center"
                                        wrap="wrap"
                                   >
                                        {
                                             tareas.map(item => (

                                                  <Grid
                                                       item
                                                       className={classes.contentTareas}
                                                       key={shortid.generate()}
                                                  >
                                                       <Paper
                                                            elevation={2}
                                                            className={classes.paperTareas}
                                                       >
                                                            {/* <h3>{item.id + 1}._</h3> */}
                                                            <h3 className={classes.textTarea}>{item.name}</h3>
                                                       <div className={classes.containerButtons}>
                                                                 <Button
                                                                 disabled={editMode ? true : false}
                                                                 className={classes.buttonTareas}
                                                                 onClick={() => handleRemove(item.id)}
                                                                 size="small"
                                                                 variant="outlined"
                                                                 color="secondary"
                                                                 startIcon={<DeleteIcon />}
                                                            >
                                                                 Eliminar
                                                            </Button>
                                                                 <Button
                                                                      disabled={editMode ? true : false}
                                                                 className={classes.buttonTareas}
                                                                 onClick={() => handleEdit(item.id)}
                                                                 size="small"
                                                                 variant="outlined"
                                                                 color="primary"
                                                                 startIcon={<EditIcon />}
                                                            >
                                                                 Editar
                                                            </Button>
                                                            </div>

                                                            </Paper>
                                                  </Grid>

                                             ))}
                                   </Grid>

                         }
                  

               </Grid>

          </Grid>
     )
}

export default Tareas
