import {getStatusURL, getBlocksURL} from "./constants/url"
import axios from "axios";

export const fetchBlocks = (lastblockheight) => {
    const url = getBlocksURL(1,lastblockheight);
    axios(url).then(
      blockResponse => {
        //   console.log(blockResponse)
        return blockResponse;
        
      }
  )
};