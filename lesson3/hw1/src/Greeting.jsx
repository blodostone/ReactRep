import React from "react";
import ReactDOM from "react-dom";



const Greeting = (props) => {
    const age = (new Date() - new Date(props.birthDate));
  return (
    <div className='greeting'>
      {`My name is ${props.firstName} ${props.lastName}. I'm ${age(
        props.birthDate
      )} years old`}
    </div>
  );
};

export default Greeting;