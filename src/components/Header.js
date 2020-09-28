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

    handleSearchInput = event => {
        this.setState({
            searchText: event.target.value
        });
    };

    handleSearchSubmit = () => {
        if (this.state.searchText) {
            let text = this.state.searchText;
            this.setState({ searchText: "" })
            if (/^[A-Z0-9]{64}$/.test(text) ) {
                this.props.history.push({
                    pathname: `/transaction/${text}`,
                    state: { searchText: text }
                });
            }
            else if(/^[0-9]{1,40}$/.test(text)){
                this.props.history.push({
                    pathname:  `/block/${text}`,
                    state: { searchText: text }
                });
            }
          
        } else {
            alert("Please enter some search text!");
        }
    };

    handleSearchKeyUp = event => {
        event.preventDefault();
        if (event.key === 'Enter' && event.keyCode === 13) {
            this.handleSearchSubmit();
        }
        
    }

    handleFormSubmit = e => e.preventDefault();
    render() {
        const { validators } = this.state;
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={this.handleRoute("/")}>Home</Nav.Link>
                        {/* <Nav.Link onClick={this.handleRoute("/about")}>Genesis</Nav.Link> */}
                        <Nav.Link onClick={this.handleRoute("/validators")}>Validators</Nav.Link>
                        <Nav.Link onClick={this.handleRoute("/blocks")}>Blocks</Nav.Link>
                        <Nav.Link onClick={this.handleRoute("/transactions")}>Transactions</Nav.Link>
                    </Nav>
                    <Form inline onSubmit={this.handleFormSubmit}>
                        <FormControl
                            onChange={this.handleSearchInput}
                            value={this.state.searchText}
                            onKeyUp={this.handleSearchKeyUp}
                            type="text"
                            placeholder="Search by txHash / block Height"
                            className="mr-sm-2"
                        />
                        <Button onClick={this.handleSearchSubmit} variant="outline-info">
                            Search
                        </Button>
                    </Form>
                </Navbar>
        
            </>
        );
    }
}

export default withRouter(Header);
