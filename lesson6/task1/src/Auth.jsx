import React from 'react';
import Greeting from './Greeting';

class Auth extends Component {

    constructor (props) {
        super(props);

        this.state = {
            isLoggedIn: true
        };
    }

    handleLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    }

    handleLogout = () => {
        this.setState({
            isLoggedIn: false
        });
    }

    render() {
        // const button = this.state.isLoggedIn ? (
        //     <button onClick={this.handleLogout}>Logout</button>
        // ) : (
        //     <button onClick={this.handleLogin}>Login</button>
        // )

        // if(this.state.isLoggedIn) {
        //     button = <button onClick={this.handleLogout}>Logout</button>
        // } else {
        //     <button onClick={this.handleLogin}>Login</button>
        // }
        return (
            <div className="panel">
                <Greeting isLoggedIn ={this.state.isLoggedIn}/>
                <div>
                    <button onClick={this.handleLogin}>Login</button>
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
            </div>
        )

        
    }
}
