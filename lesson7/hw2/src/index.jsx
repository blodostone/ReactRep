import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const rootElement = document.querySelector('#root');

const users = [
    {
        id: 1,
        age: 34,
        name: 'John'
    },
    {
        id: 2,
        age: 16,
        name: 'Harry'
    },
    {
        id: 3,
        age: 22,
        name: 'Tony'
    },
    {
        id: 4,
        age: 56,
        name: 'Edward'
    },
    {
        id: 5,
        age: 65,
        name: 'Donald'
    },
]

ReactDOM.render(<UsersList users={users}/>, rootElement);
