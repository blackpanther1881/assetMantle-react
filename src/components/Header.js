import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import axios from "axios";

class Header extends React.Component {
    state = {
        searchText: "",
        validators: {}
    };

    handleRoute = route => () => {
        this.props.history.push({ pathname: route });
    };

    render() {
        const { validators } = this.state;
        return (
            <>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand ><Nav.Link onClick={this.handleRoute("/")}>Asset Mantle</Nav.Link></Navbar.Brand>
                    <Nav className="mr-auto">
                        
                        <Nav.Link onClick={this.handleRoute("/Dashboard")}>Dashboard</Nav.Link>
                        <Nav.Link onClick={this.handleRoute("/transactions")}>Transactions</Nav.Link>
                        <Nav.Link onClick={this.handleRoute("/Docs")}>Docs</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link onClick={this.handleRoute("/CreateAccount")}>Sign Up</Nav.Link>
                    <Nav.Link onClick={this.handleRoute("/AccountRecover")}>Recover</Nav.Link>
                    </Nav>
            
                </Navbar>
        
            </>
        );
    }
}

export default withRouter(Header);
