import React from "react";
import ReactDOM from "react-dom";



const Greeting = (props) => {
    const age = new Date(props.birthDate).getDays().getFullYear()
  return (
    <div className='greeting'>
      {`My name is ${props.firstName} ${props.lastName}. I'm ${age} years old`}
    </div>
  );
};

export default Greeting;