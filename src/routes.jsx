import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar/index'
import PaginaCadastro from './pages/cadastro';

const routes = [
   { 
    component: PaginaCadastro,
    name: "Agendamento",
    path: "/agendamento"
   },
]



const Routes  = () => (
    <BrowserRouter>
        <Navbar />
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