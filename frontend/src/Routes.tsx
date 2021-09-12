import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'pages/Home'
import Dashboard from 'pages/DashBoard';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>

                <Switch>

                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>

                </Switch>

            </BrowserRouter>
        </div>
    );
}

export default Routes;
