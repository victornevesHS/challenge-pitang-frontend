import react, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FormAgend from './components/FormAgend';


const routes = [
   { 
    component: FormAgend,
    name: "Agendamento",
    path: "/agendamento"
   },


  
]



const Routes  = () => (
    <BrowserRouter>
        <Switch>

        {routes.map((route) => (
            <Route
                exact
                key={route.path}
                path={route.path}
                component={route.component}
            />
      ))}
            
            
        </Switch>

    </BrowserRouter>

)

export default Routes;