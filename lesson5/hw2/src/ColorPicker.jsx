import React from 'react';

// const CORAL = ;
// const AQUA = ;
// const BISQUE = ;

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Red'
        };
        console.log(this.state.title)
    };

    ChangeColorText = (text) => {
        this.setState({color: this.state.title = text});
    };



    resetText = () => {
        this.setState({
            color: this.state.title = null
        });
    };



    render() {
        return(
            <div>
                <div class="picker__title">
                    {this.state.title}
                </div>
                <div>
                    <button 
                        onMouseOver={() => this.ChangeColorText('Coral')}
                        onMouseOut={() => this.resetText()}
                        class="picker__button picker__button_coral">

                    </button>
                    <button 
                        onMouseOver={() => this.ChangeColorText('Aqua')}
                        onMouseOut={() => this.resetText()}
                        class="picker__button picker__button_aqua">
                    </button>
                    <button 
                        onMouseOver={() => this.ChangeColorText('Bisque')}
                        onMouseOut={() => this.resetText()}
                        class="picker__button picker__button_bisque">
                    </button>
                </div>
            </div>
        )
    }
}

export default ColorPicker;
