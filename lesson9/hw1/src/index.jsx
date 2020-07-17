import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';


const rootElement = document.querySelector('#root');


const users =[
    {
        id: 1,
        age: 18,
        name: 'Tad'
    },
    {
        id: 2,
        age: 45,
        name: 'Anna'
    }

]


ReactDOM.render(<UsersList users={users} />, rootElement)
