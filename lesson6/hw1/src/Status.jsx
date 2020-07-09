import React from 'react';
import Online from './Online.jsx'
import Offline from './Offline.jsx'


class Status extends React.Component {
    constructor(props) {
        super(props)


    }

    render() {
        return(
            <div className="status">
            {this.props.isOnline ? (
                <Online text={"All good!"} />
            ) : (
                <Offline text={"Offline"} />
            )}

            {/* <span class="status__text">Offline</span> */}
            <button className="status__btn">Reconnect</button>
          </div>
    
        )

    }
}

export default Status;