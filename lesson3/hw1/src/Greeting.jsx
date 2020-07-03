import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";


const birthDate = (date) => moment(date).format("DD MMM YY");

// const Greeting = (props) => {

//   return (
//     <div className="greeting">
//       {`My name is ${props.firstName} ${props.lastName}. I'm ${birthDate(props.userData.birthDate} years old`}
//     </div>
//   );
// };



const birthDate = (date) => moment(date).format("DD MMM YY");

const Greeting = (props) => {
    return (
      <>
        <div className='greeting'>{`My name is ${props.firstName} ${props.lastName}. I'm ${birthDate(props.userData.birthDate)} years old`}</div>
      </>
    );
  };


export default Greeting;

