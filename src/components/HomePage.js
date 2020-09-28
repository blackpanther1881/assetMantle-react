import React from "react";
import axios from "axios";
import LatestBlock from "./LatestBlock"
import {
  getStatusURL,
} from '../constants/url';
class HomePage extends React.Component {
    state = {
      nodeInfo: {},
      syncInfo: {},
      validatorInfo: {}
    };
    
    componentDidMount() {
      const url = getStatusURL();
            axios(url).then(
              info => {
                  this.setState({ 
                    nodeInfo : info.data.result.node_info,
                    syncInfo : info.data.result.sync_info,
                    validatorInfo : info.data.result.validator_info
                   });
              }
          );
    }
    
  render() {
    const { nodeInfo, syncInfo, validatorInfo } = this.state;
  
    return (
      <div style={{ margin: "20px 0px 0px 0px" }}>
        <LatestBlock />
        <div class="row row-cols-1 row-cols-md-2 card-deck">
          <div class="col-md-4 custom-pad">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="card-title">Node Information</h6>
                <li className="list">
                  <div className="textLabel">
                  Id
                  </div>
                  <div className="textValue">
                  {nodeInfo.id}
                  </div>
                </li>
                <li className="list">
                  <div className="textLabel">
                  Network
                  </div>
                  <div className="textValue">
                  {nodeInfo.network}
                  </div>
                </li>
                <li className="list">
                  <div className="textLabel">
                  Channels
                  </div>
                  <div className="textValue">
                  {nodeInfo.channels}
                  </div>
                </li>
                {/* <li className="list">
                  <div className="textLabel">
                  Moniker
                  </div>
                  <div className="textValue">
                  {nodeInfo.moniker}
                  </div>
                </li>
                <li className="list">
                  <div className="textLabel">
                  Version
                  </div>
                  <div className="textValue">
                  {nodeInfo.version}
                  </div>
                </li> */}
              </div>
            </div>
          </div>
          <div class="col-md-4 custom-pad">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="card-title">Latest Block Information</h6>
                <li className="list">
                  <div className="textLabel">
                    Hash
                  </div>
                  <div className="textValue">
                  {syncInfo.latest_block_hash}
                  </div>
                </li>
                <li className="list">
                  <div className="textLabel">
                    Height
                  </div>
                  <div className="textValue">
                  {syncInfo.latest_block_height}
                  </div>
                </li>
                <li className="list">
                  <div className="textLabel">
                    Time
                  </div>
                  <div className="textValue">
                  {syncInfo.latest_block_time}
                  </div>
                </li>
                
                {/* <p class="card-text"><b>Earliest Block Hash</b> : {syncInfo.earliest_block_hash} </p>
                <p class="card-text"><b>Earliest Block Height</b> : {syncInfo.earliest_block_height} </p>
                <p class="card-text"><b>Earliest Blcok Time</b> : {syncInfo.earliest_block_time} </p> */}
              </div>
            </div>
          </div>
          <div class="col-md-4 custom-pad">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="card-title">Validator Information</h6>
                <li className="list">
                  <div className="textLabel">
                  Address
                  </div>
                  <div className="textValue">
                  {validatorInfo.address}
                  </div>
                </li>
                <li className="list">
                  <div className="textLabel">
                  Voting Power
                  </div>
                  <div className="textValue">
                  {validatorInfo.voting_power}
                  </div>
                </li>
                </div>
            </div>
          </div>
        </div>
       
        <h4></h4>
       
        <h4></h4>
        
      </div>
    );
  }
}
export default HomePage
