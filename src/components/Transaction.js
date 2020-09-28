import React from "react";
import axios from "axios";
import {
    getTransactionURL,
} from '../constants/url';
import LatestBlock from "./LatestBlock"
export default class Transaction extends React.Component {
    state = {
        isLoading: true,
        searchText: "",
        searchResults: {},
    };

    handleSearch = () => {
        let searchText = this.props.location.state.searchText;
        const url = getTransactionURL(searchText);
        console.log(searchText)
             axios(url).then(
                jsonResponse => {
                 this.setState({
                    isLoading: false,
                    searchText: searchText,
                    searchResults: jsonResponse.data.result
                })
           
                })
                .catch(err => {
                    return <p>not found</p>;
                })
    };

    componentDidMount() {
        this.handleSearch();
    }

    componentDidUpdate(prevProps) {
        let prevSearch = prevProps.location.state.searchText;
        let newSearch = this.props.location.state.searchText;
        if (prevSearch !== newSearch) {
            this.handleSearch();
        }
    }

    render() {
        const {searchResults}=this.state;
        let toRender = this.state.isLoading ? (
            <h1>Loading...</h1>
        ) : (
            <>
            <LatestBlock />
                <h4>Search Results</h4>
                {/* <ul>
                    <li>Search: "{this.state.searchText}"</li>
                </ul> */}
                {this.state.searchResults ?
                    <div className="card" >
                    <div className="card-body">
                    <p className="card-text">Hash: "{searchResults.hash}"</p>
                    <p className="card-text">height: "{searchResults.height}"</p>
                    
                    {
                            searchResults.tx_result.log.map((log1, index) => {
                                return (
                                    <p className="card-text" key={index}>Status:{log1.success} </p>         
                                )
                            })
                        }
                    <p className="card-text">Gas (used / wanted): {searchResults.tx_result.gas_used} / {searchResults.tx_result.gas_wanted}</p>
                    <p className="card-text">validators hash: "{searchResults.validators_hash}"</p>
                    </div>
                    </div>
                : 
                    <p>NO Data Found</p>
                }
            </>
        );
        console.log(this.state.searchResults,"serach")
        return <div style={{ margin: "20px 0px 0px 20px" }}>{toRender}</div>;
    }
}
