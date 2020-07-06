import React from 'react';


const GREEN = '#0f0';
const BLUE = '#00f';


class Toggler extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggler: 'Off',
            color: "GREEN"
        };
    }

    setBodyTurnOn = () => {
        // console.log(e)
        if(this.state.toggler == 'Off') {
            this.setState({
                toggler: this.state.toggler = 'On',
                color: document.body.style.backgroundColor = BLUE,
            });
        } else {
            this.setState({
                toggler: this.state.toggler = 'Off',
                color: document.body.style.backgroundColor = GREEN,
            });
        };


    }



    render() {
        return(
            <div>
                <button 
                onClick={() => this.setBodyTurnOn()}
                className = 'togglers__button'> 
                {this.state.toggler}
                    
                </button>
            </div>

        )
    }
}

export default Toggler;