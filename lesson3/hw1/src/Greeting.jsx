import React from "react";
import ReactDOM from "react-dom";



const Greeting = (props) => {
    const age = new Date(props.birthDate).getFullYear().getDays()
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${props.birthDate} years old`}
    </div>
  );
};

export default Greeting;