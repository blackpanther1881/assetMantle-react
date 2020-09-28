import React from "react";
import axios from "axios";
import {
    getBlockURL,
} from '../constants/url';
import LatestBlock from "./LatestBlock"
export default class SearchResultsPage extends React.Component {
    state = {
        isLoading: true,
        searchText: "",
        searchResults: [],
    };

    handleSearch = () => {
        let searchText = this.props.location.state.searchText;
        const url = getBlockURL(searchText);
        console.log(searchText)
             axios(url).then(
                jsonResponse => {
                 this.setState({
                    isLoading: false,
                    searchText: searchText,
                    searchResults: jsonResponse.data.result.block.header
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
                    <p className="card-text">Height: "{this.state.searchResults.height}"</p>
                    <p className="card-text">Chain ID: "{this.state.searchResults.chain_id}"</p>
                    <p className="card-text">time: "{this.state.searchResults.time}"</p>
                    <p className="card-text">last block Hash: "{this.state.searchResults.last_block_id.hash}"</p>
                    <p className="card-text">validators hash: "{this.state.searchResults.validators_hash}"</p>
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
