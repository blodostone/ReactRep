import React from 'react';



class Toggler extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            toggler: false
        };
    }

    setBodyTurnOn = () => {
        // console.log(e)
        if(this.state.toggler == 'Off') {
            this.setState({
                toggler: this.state.toggler = 'On',
            });
        } else {
            this.setState({
                toggler: this.state.toggler = 'Off',
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