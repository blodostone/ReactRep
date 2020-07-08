import React from 'react';



class Toggler extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            toggler: 'Off'
        };
        // console.log(this.state.toggler)
    }

    debugger
    setBodyTurnOn = () => {
        // console.log(e)
        if(this.state.toggler == 'Off') {
            this.setState({
                toggler:'On',
            });
        } else {
            this.setState({
                toggler:'Off',
            });
        };


    }



    render() {
        return(
            <div>
                <button 
                onClick={() => this.setBodyTurnOn()}
                className = 'toggler'> 
                {this.state.toggler}
                    
                </button>
            </div>
        )
    }
}

export default Toggler;