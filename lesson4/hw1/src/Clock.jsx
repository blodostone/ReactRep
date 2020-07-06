import React, { Component } from 'react';
import './clock.scss';
// import getTimeWithOffset from './getTimeWithOffset.js';
import moment from 'moment';



class Clock extends Component {
  constructor(props) {
      super(props);
      this.state = {
        time: this.state.time.getTimezoneOffset()
    };
    
    setInterval(() => {
      this.setState({
        time: this.state.time.getTimezoneOffset()
      }) 
    }, 1000);
  };





 render() {
  return (
    <div className="clock">
      <div className="clock__location">
        {this.props.location}</div>
      <div className="clock__time">
        {this.state.time.toLocaleTimeString()}</div>
    </div>
          );
        };

};


export default Clock;