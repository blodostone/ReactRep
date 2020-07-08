import React from 'react';
import UserGreeting from './UserGreeting';
import Guestgreeting from './GuestGreeting'

const Greeting = props => {
    console.log(props);
    if (props.isLoggedIn) {
        return <UserGreeting />
    }
    return <Guestgreeting />
}

export default Greeting;