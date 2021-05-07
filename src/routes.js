import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import Courses from './pages/Courses'
import Event from './pages/Event'
import Login from './pages/Login'
import Register from './pages/Register'
import Partners from './pages/Partners'
import EventFull from './pages/EventFull'
import ConstructorPage from './pages/ConstructorPage'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cursos" exact component={Courses} />
                <Route path="/porteira-em-um-minuto" exact component={Event} />
                <Route path="/eventos-porteira" exact component={EventFull} />
                <Route path="/vem-ai" exact component={ConstructorPage} />
                <Route path="/login" exact component={Login} />
                <Route path="/cadastro" exact component={Register} />
                <Route path="/parceiros" exact component={Partners} />
                <Route path="/conteudo360" exact component={ConstructorPage} />
            </Switch>        
        </BrowserRouter>
    )
}

export default Routes