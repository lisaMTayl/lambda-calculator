import React from "react";


const NumberButton = ({ number }) => {
  return (
    <div className="numContainer">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="numBtn">{ number }</button>
    </div>
  );
};

export default NumberButton;