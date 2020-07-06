import React, { Component } from 'react';
import './clock.scss';
import getTimeWithOffset from './getTimeWithOffset.jsx';
import moment from 'moment';



class Clock extends Component {
  constructor(props) {
      super(props);
      this.state = {
        location: props.city,
        offset: props.offset,
        time: getTimeWithOffset(this.props.offset)
    };
    
    setInterval(() => {
      this.setState({
        time: getTimeWithOffset(this.props.offset)
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