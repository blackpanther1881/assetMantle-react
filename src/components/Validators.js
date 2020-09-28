import React, {useState, useEffect} from "react";
import axios from "axios";
import {getValidatorURL} from "../constants/url"
import LatestBlock from "./LatestBlock"
const Validator = () => {

  const [validatorsList, setValidatorsList] = useState([]);
  const url = getValidatorURL();
  const fetchValidator = async () => {
    const response = await axios.get(url);
    setValidatorsList(response.data.result.validators)
  
  } 
  useEffect(() => {
    fetchValidator();
  }, []);

  return (
    <div style={{ margin: "20px 0px 0px 0px" }}>
      <LatestBlock />
    {
     validatorsList.map((Validator, index) => {
         return (
           <div className="card">
           <div className="card-body">
             <li className="list">
               <div className="textLabel">
                 Validator address
               </div>
               <div className="textValue">
               {Validator.address}
               </div>
             </li>
             <li className="list">
               <div className="textLabel">
               Voting Power
               </div>
               <div className="textValue">
               {Validator.voting_power}
               </div>
             </li>
              </div>
              </div>
         );
     })
     }
   </div>
  );
}

export default Validator;
