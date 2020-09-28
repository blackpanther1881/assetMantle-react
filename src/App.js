import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { AboutPage, HomePage, SearchResultsPage, RouteNotFound , Validator, Blocks, Header, BlockDetails, Transaction, Transactions} from "./components";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import axios from "axios";
const routes = [{
    path: '/',
    component: HomePage,
}, {
    path: '/blocks',
    component: Blocks,
}, {
    path: '/blockResults/:height',
    component: BlockDetails,
}, {
    path: '/transactions',
    component: Transactions,
}, {
    path: '/transaction/:txHash',
    component: Transaction,
}, {
    path: '/validators',
    component: Validator,
}, {
    path: '/block/:height',
    component: SearchResultsPage,
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
                <div className="container">
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
                </div>
            </>
            
        );
    }
}

export default withRouter(App);
