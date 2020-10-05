import React from "react";
import axios from "axios";
import {getBlocksURL} from "../constants/url"
import { NavLink, withRouter } from 'react-router-dom';
import LatestBlock from "./LatestBlock"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import {fetchBlocks} from "../api"

class Blocks extends React.Component {


  render() {
   
    return (
      <p>blocks</p>
    );
  }
}
export default withRouter(Blocks); 
