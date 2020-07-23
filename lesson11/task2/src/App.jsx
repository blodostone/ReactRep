import React from 'react'
import './index.scss'

import Dialog from './Dialog.jsx'

class App extends React.Component {
  state = {
    isOpen: false,
  }

  showDialog = () =>{
    this.setState({
      isOpen: true
    })
  }

  hideDialog = () =>{
    this.setState({
      isOpen: false
    })
  }

  render() {
   
    return (
      <div className="app">
        <button onClick={this.showDialog} className="btn">Show</button>
        <Dialog onClose={this.hideDialog} isOpen={this.state.isOpen} title="some title">
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        </Dialog>
      </div>
    )
  }
}


export default App;
