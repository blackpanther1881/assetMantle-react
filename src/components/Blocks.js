import React from "react";
import axios from "axios";
import {getStatusURL, getBlocksURL} from "../constants/url"
import { NavLink, withRouter } from 'react-router-dom';
import LatestBlock from "./LatestBlock"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import {fetchBlocks} from "../api"

class Blocks extends React.Component {
    state = {
        latestBlockHeight:"",
        blockList:[],
        currentHeight: "",
        blocks:[]
    };
    
    componentDidMount() {
      const url = getStatusURL();
            axios(url).then(
              jsonResponse => {
                this.setState({latestBlockHeight:jsonResponse.data.result.sync_info.latest_block_height})
                const url = getBlocksURL(1,jsonResponse.data.result.sync_info.latest_block_height);
                axios(url).then(
                  blockResponse => {
                    this.setState({ blockList : blockResponse.data.result.block_metas});
                  }
              )
              }
          );
    }

   handleNextBlocks = (min , max) => {
    const url = getStatusURL();
    axios(url).then(
      jsonResponse => {
        const url = getBlocksURL(min,max);
        axios(url).then(
          blockResponse => {
            this.setState({ blockList : blockResponse.data.result.block_metas});
          }
      )
      }
  );
};
  render() {
    const { blockList, latestBlockHeight } = this.state;
    const firstBlock = blockList.map(emp => emp.header.height)
    const  previousFirstBlock = firstBlock[0];
    const handleOnclickHeight = (height) => {
          this.props.history.push({
              pathname: `/blockResults/${height}`,
              state: { currentHeight: height }
          });
            this.setState({
              currentHeight: height
        });
  };
  const handleOnclickBlockHash = (hash) => {
    this.props.history.push({
      pathname:  `/block/${hash}`,
      state: { searchText: hash }
  });
};
  console.log(firstBlock[firstBlock.length-1],"latest")
    return (
      <div style={{ margin: "20px 0px 0px 0px" }} >
        <LatestBlock />
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Height</th>
      <th scope="col">Hash</th>
      <th scope="col">Proposer Address</th>
      <th scope="col">Time</th>
    </tr>
  </thead>
  <tbody>
  {
    blockList.map((block, index) => {
          return (
          <tr key={index}>
            <td> 
              <Nav.Link
                onClick={() => handleOnclickHeight(block.header.height)}>
                    <span >
                        {block.header.height}
                    </span>
                </Nav.Link>
              </td>
            <td>
            <Nav.Link
                onClick={() => handleOnclickBlockHash(block.block_id.hash)}>
                    <span >
                        {block.block_id.hash}
                    </span>
                </Nav.Link>
            </td>
            <td>{block.header.proposer_address}</td>
            <td>{block.header.time}</td>
          </tr>
          );
        })
    }
    <tr>
<td><p onClick={()=> this.handleNextBlocks( firstBlock[0], latestBlockHeight)}> Prev</p></td>
<td><p onClick={()=> this.handleNextBlocks(1, firstBlock[firstBlock.length-1])}>next</p></td>
      </tr>
      
  </tbody>
</table>
    
      </div>
    );
  }
}
export default withRouter(Blocks); 
