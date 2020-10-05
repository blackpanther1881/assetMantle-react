import React from "react";
import axios from "axios";
import LatestBlock from "./LatestBlock"
import history from './history';
import InfoCards from "./InfoCards"
class HomePage extends React.Component {

    
  render() {
  
    return (
      <div className="homeSection">
        <div className="container">
        <InfoCards />
        <div className="row row-cols-1 row-cols-md-2 card-deck infoRow">
      
          <div className="col-md-12 custom-pad appInfoBox">
              <p>Application implementing the minimum 
              clique of PersistenceSDK modules enabling interNFT definition,
              issuance, ownership transfer and decentralized exchange.</p>
        </div>
          </div>
        </div>
        
      </div>
    );
  }
}
export default HomePage
