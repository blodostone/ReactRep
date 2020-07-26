import React from 'react';
import PropTypes from 'prop-types';

class Expand extends React.Component {
    state = {
        openContent: false,
    }

    handleToggle = () =>
        this.state.openContent
        ? this.setState({ openContent: false })
        : this.setState({ openContent: true });


    render () {
        let { title, children } = this.props;

        if(!this.state.openContent){
            children = null;
        }
        return (
            <div className="expand border">
                <div className="expand__header">
                    <span className="expand__title">{title}</span>
                    <button onClick={this.handleToggle} className="expand__toggle-btn">
                        {
                            this.state.openContent
                                ? <i className='fas fa-chevron-up'></i>
                                : <i className='fas fa-chevron-down'></i>
                        }
                    </button>
                </div>
                <div className="expand__content">{children}</div>
            </div>
        );
    };
};

export default Expand;