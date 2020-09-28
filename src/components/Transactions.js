import React from "react";
import axios from "axios";
import {
    getTransactionURL,
} from '../constants/url';
import LatestBlock from "./LatestBlock";

export default class Transactions extends React.Component {
    
    render() {

        return <div style={{ margin: "20px 0px 0px 20px" }}>
            <LatestBlock />
        </div>;
    }
}
