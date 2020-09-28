import React from "react";
import axios from "axios";
import {getStatusURL, getBlockHeightURL} from "../constants/url"
import {
    getBlockURL,
} from '../constants/url';
export default class SearchResultsPage extends React.Component {
    state = {
        isLoading: true,
        currentHeight: "",
        searchResults: {},
        events:[]
    };

    handleSearchHeight = () => {
        let currentHeight = this.props.location.state.currentHeight;
        const url = getBlockHeightURL(currentHeight);
        // console.log(searchText)
             axios(url).then(
                jsonResponse => {
                 this.setState({
                    isLoading: false,
                    currentHeight: currentHeight,
                    searchResults: jsonResponse.data.result,
                    events : jsonResponse.data.result.begin_block_events
                })
                })
                .catch(err => {
                    return <p>not found</p>;
                })
    };

    componentDidMount() {
        this.handleSearchHeight();
    }

    componentDidUpdate(prevProps) {
        let prevSearch = prevProps.location.state.searchText;
        let newSearch = this.props.location.state.searchText;
        if (prevSearch !== newSearch) {
            this.handleSearch();
        }
    }

    render() {
        const {searchResults, events} = this.state;
        console.log(events,"evets")
        let toRender = this.state.isLoading ? (
            <h1>Loading...</h1>
        ) : (
            <>
                {/* <ul>
                    <li>Search: "{this.state.searchText}"</li>
                </ul> */}
                {searchResults ?
                    <div>
                        <div className="infoBox">
                        <p>Height: {searchResults.height}</p>
                       <p> Txs :  
                      { `${searchResults.txs_results}` == "null" ?  0 : <p>{searchResults.txs_results}</p>}
                      </p>
                        </div>
                      {/* <li>Chain ID: "{searchResults.chain_id}"</li>
                      <li>time: "{searchResults.time}"</li>
                      <li>last block Hash: "{searchResults.last_block_id.hash}"</li>
                      <li>validators hash: "{searchResults.validators_hash}"</li> */}
                            {
                            events.map((event, index) => {
                                return (
                                <div className="card blockInfoCard" key={index}>
                                <h5 className="card-header">{event.type}</h5>
                                <div className="card-body">
                                {
                                    event.attributes.map((c, i) => {
                                        return (
                                        <div className="card" key={i}>
                                            
                                        <div className="card-body">
                                        <p className="card-text">{c.key}</p>
                                        <p className="card-text">{c.value}</p>
                                            {/* <h5 className="card-title">Special title treatment</h5>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                        </div>
                                        </div>
                                        );
                                    })
                                }
                                    {/* <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                                </div>
                                );
                            })
                        }
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
