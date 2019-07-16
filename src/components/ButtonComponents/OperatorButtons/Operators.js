import React, { useState } from "react";

//import any components needed
import OperatorButton from "../OperatorButtons/OperatorButton.js";

//Import your array data to from the provided data file
import { operators } from "../../../data";

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);
  console.log('operators', { operatorState }); // test if data is being received
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operatorState.map(( operator, index, char ) => (<OperatorButton operator={ operator } key={ index } char={ char }/>)
      )}
    </div>
      );
};

export default Operators;
