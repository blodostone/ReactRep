import React, { Component } from 'react';
import getTimeWithOffset from "./getTimeWithOffset";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: props.city,
            offset: props.offset,
            date: getTimeWithOffset(this.props.offset),
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState ({
                date: getTimeWithOffset(this.props.offset),
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);

    }

    render() {
        return (
            <div className="clock">
                <div className="clock__location">
                    {this.props.location}
                </div>
                <div className="clock__time">
                    {this.state.date.toLocaleTimeString()}
                </div>
            </div>
        )
    }
}

export default Clock;