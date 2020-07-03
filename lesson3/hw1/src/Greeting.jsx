import React from "react";
import ReactDOM from "react-dom";
import birthD from './birthD.jsx'


// const birthD = (birthDate) => {
//   ageInMiliSec = 31536000000;
//   return Math.floor((new Date() - new Date(birthDate)) / ageInMiliSec);
// };


const Greeting = (props) => {

  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${birthD(props.birthDate)} years old`}
    </div>
  );
};

export default Greeting;