import React, {useState, useEffect} from "react";
import axios from "axios";
import {getStatusURL} from "../constants/url"

const LatestBlock = () => {

  const [LatestBlock, setLatestBlock] = useState([]);
  const url = getStatusURL();
  const fetchLatestBlock = async () => {
    const response = await axios.get(url);
    setLatestBlock(response.data.result.sync_info.latest_block_height)
  } 
  useEffect(() => {
    fetchLatestBlock();
  }, []);

  return (
    <div className="infoBox">
    <p>Latest Block Height: {LatestBlock}</p>
   </div>
  );
}

export default LatestBlock;
