import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { HomePage, RouteNotFound , Header,
    Transactions, Account, CreateAccount, AccountRecover, Dashboard, Docs} from "./components";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import axios from "axios";
const routes = [{
    path: '/',
    component: HomePage,
},{
    path: '/transactions',
    component: Transactions,
}, {
    path: '/account',
    component: Account,
}, {
    path: '/CreateAccount',
    component: CreateAccount,
}, {
    path: '/AccountRecover',
    component: AccountRecover,
}, {
    path: '/Dashboard',
    component: Dashboard,
}, {
    path: '/Docs',
    component: Docs,
}];
class App extends React.Component {

    render() {
        return (
            <>
            <div className="container-fluid app-nav">
            <div className="container">
                <Header />
                </div>
                </div>
               
                <Switch>
                    {
                        routes.map((route) =>
                            <Route
                                key={route.path}
                                exact
                                component={route.component}
                                path={route.path}/>,
                        )
                    }
                   
                    <Route component={RouteNotFound} />
                </Switch>
            </>
            
        );
    }
}

export default withRouter(App);
