import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import './search.scss'
import Seacrh from './Search.jsx'

const rootElement = document.querySelector('#root');


ReactDOM.render(<Seacrh name="Bob"/>, rootElement)