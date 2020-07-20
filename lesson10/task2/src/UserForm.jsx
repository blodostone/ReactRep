import React from 'react';

const UserForm = ({userData, onChange}) => {
    return (
      <form className='user-form'>
        <input
          value={userData.firstName}
          type='text'
          name='firstName'
          className='user-form__input'
          value={userData.firstName}
          onChange={onChange}
        />
        <input
          value={userData.lastName}
          type='text'
          name='lastName'
          className='user-form__input'
          value={userData.lastName}
          onChange={onChange}
        />
      </form>
    );
};

export default UserForm;