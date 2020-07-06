import React, { Component } from 'react';


// const GREEN = '#0f0';
// const BLUE = '#00f';


class Toggler extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggler: 'Off',
            // color: "GREEN"
        };
    }

    setBodyTurnOn = () => {
        // console.log(e)
        if(this.state.toggler == 'Off') {
            this.setState({
                toggler: this.state.toggler = 'On'
            });
        } else {
            this.setState({
                toggler: this.state.toggler = 'Off'
            });
        };


    }



    render() {
        return(
            <div className = 'togglerBtn'>
                <button 
                onClick={() => this.setBodyTurnOn()}
                className = 'togglers__button'> {this.state.toggler}
                    
                </button>
            </div>

        )
    }
}

export default Toggler;