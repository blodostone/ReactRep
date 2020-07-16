import React from 'react';

//componentDidMount add status
//
//create offline status


class ConnectionStatus extends React.Component {
  state = {
    status: 'online'
  }


  componentDidMount() {
    window.addEventListener('online', this.setInternetOn);
    window.addEventListener('offline', this.setInternetOff);
  }


  componentWillUnmount() {
    window.removeEventListener('online', this.setInternetOn);
    window.removeEventListener('offline', this.setInternetOff);
  }


  setInternetOn = () => {
    this.setState({
      status: 'online',
    });
  };


  setInternetOff = () => {
    this.setState({
      status: 'offline',
    });
  };


  render() {
    if (this.state.status === 'offline') {
      return <div className='status status_offline'>{this.state.status}</div>;
    }
    return <div className='status'>{this.state.status}</div>;
  }
}

export default ConnectionStatus;

