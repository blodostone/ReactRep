import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";


const birthDate = (date) => moment(date).format("DD MMM YY");

const Profile = (props) => {
    return (
      <>
        <div className='profile__name'>{`${props.userData.firstName} ${props.userData.lastName}`}</div>
        <div className='profile__birth'>{`Was born ${birthDate(props.userData.birthDate)} in ${
          props.userData.birthPlace}`}</div>
      </>
    );
  };


export default Profile;