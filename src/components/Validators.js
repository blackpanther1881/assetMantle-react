import React, {useState, useEffect} from "react";
import axios from "axios";
import {getValidatorsURL} from "../constants/url"
import LatestBlock from "./LatestBlock"
const Validator = () => {

  const [validatorsList, setValidatorsList] = useState([]);
  const url = getValidatorsURL();
  const fetchValidator = async () => {
    const response = await axios.get(url);
    console.log(response)
    setValidatorsList(response.data.result.validators)
  
  } 
  useEffect(() => {
    fetchValidator();
  }, []);

  return (
    <div style={{ margin: "20px 0px 0px 0px" }}>
    {/* {
     validatorsList.map((Validator, index) => {
         return (
           <div className="card validator">
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
     } */}
     <p>vad</p>
   </div>
  );
}

export default Validator;
