import React, { useState } from "react";

//import any components needed
import  NumberButton from './NumberButton';

//Import your array data to from the provided data file
import { numbers } from '../../../data.js';

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  console.log('numbers', { numberState });  // test if data is being received
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numberState.map(( number, index) => (
        <NumberButton number={ number } key={ index } />))}
    </div>
  );
};

export default Numbers;
