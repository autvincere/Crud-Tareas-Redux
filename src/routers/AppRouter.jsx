import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Tareas from '../components/Tareas'
import Active from '../components/Active'
import Completed from '../components/Completed'

const AppRouter = () => {
     return (
          <BrowserRouter>
               <Layout>
                    <Switch>
                         <Route exact path='/completed' component={Completed}/>
                         <Route exact path='/active' component={Active}/>
                         <Route exact path='/' component={Tareas} />
                         <Route exact path='*'> <h1>404 not found</h1> </Route>
                    </Switch>
               </Layout>
          </BrowserRouter>
     )
}

export default AppRouter
