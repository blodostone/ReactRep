import React, { Component } from "react";
import User from "./User";
import Filter from "./Filter";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
    };
  }

  filterUsers = () => this.props.users.filter((user) =>
    user.name.toUpperCase().includes(this.state.filterText.toUpperCase()));

  onChange = event => {
    this.setState({
        filterText: event.target.value
    })
    };

    render() {
        return (
            <>
                <Filter
                    count={this.filterUsers().length}
                    onChange={this.onChange}
                    filterText={this.state.filterText}
                />
                <ul>{this.filterUsers().map(user => (
                    <User key={user.id} {...user} />))
                }
                </ul>

            </>
        )
    }
}


export default UsersList;