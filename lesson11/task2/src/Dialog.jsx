import React from 'react';
import PropTypes from 'prop-types'

const Dialog = ({ isOpen, children, title, onClose }) => {
    if(!isOpen){
        return null;
    }
    return (
        <div className="dialog">
            <div className="dialog__heading">
                <div className="dialog__title">{title}</div>
                <button onClick={onClose} className="dialog__close-btn">+</button>
            </div>
            <div className="dialog__content">{children}</div>
        </div>
    )
};


Dialog.propTypes ={
    isOpen: PropTypes.bool,
    children: PropTypes.element.isRequired,
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired
};

Dialog.defaultProps = {
    title:'',
    isOpen:false,
};


export default Dialog;