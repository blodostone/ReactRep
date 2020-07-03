import React from "react";
import ReactDOM from "react-dom";


const Greeting = (props) => {
  const birthD = new Date(props.birthDate).getFullYear().getDays()
  
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${birthD} years old`}
    </div>
  );
};

export default Greeting;