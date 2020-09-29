import React from "react";
import axios from "axios";
import {getStatusURL, getBlockTransactionsURL} from "../constants/url"
import {
    getBlockURL,
} from '../constants/url';


export default class BlockTransactions extends React.Component {
    state = {
        // isLoading: true,
        // currentHeight: "",
        // searchResults: {},
        txs:[]
    };

    handleBlockTransactions = (heigt) => {
        const url = getBlockTransactionsURL(heigt);
        // console.log(searchText)
             axios(url).then(
                jsonResponse => {
                 this.setState({
                    isLoading: false,
                    // currentHeight: currentHeight,
                    // searchResults: jsonResponse.data.result,
                    txs: jsonResponse.data.result.txs
                })
                })
                .catch(err => {
                    return <p>not found</p>;
                })
    };

    componentDidMount() {
        this.handleBlockTransactions(this.props.height);
    }

    render() {
        const {txs} = this.state;
        console.log(txs.length, "txsmss")
        
        let toRender = this.state.isLoading ? (
            <h1>Loading...</h1>
        ) : (
            <>
                { txs.length === '0' ? (
                    <div>
                            {
                            txs.map((tx, index) => {
                                return (
                                    <div className="card"  key={index}>
                                <div className="card blockInfoCard">
                            
                                <div className="card-body">
                                
                                <p className="card-text">Hash: "{tx.hash}"</p>
                                <p className="card-text">height: "{tx.height}"</p>
                                
                                {
                                        tx.tx_result.log.map((log1, i) => {
                                            return (
                                                <p className="card-text" key={i}>Status:{log1.success} </p>         
                                            )
                                        })
                                    }
                                <p className="card-text">Gas (used / wanted): {tx.tx_result.gas_used} / {tx.tx_result.gas_wanted}</p>
                                <p className="card-text">validators hash: "{tx.validators_hash}"</p>
                                </div>
                                </div>
                                </div>
                                );
                            })
                        }
                    </div>
                
                ): 
                    <p>Transactions not found</p>
                }
            </>
        );
        console.log(this.state.searchResults,"serach")
        return <div style={{ margin: "20px 0px 0px 20px" }}>{toRender}</div>;
    }
}
