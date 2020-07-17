import React from 'react';
import UserForm from './UserForm.jsx';

class App extends React.Component {
  createUser = (users) => {
    console.log(users);
  };

  render() {
    return <UserForm onSubmit={this.createUser}/>;
  }

}


export default App;