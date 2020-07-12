import React from "react";
import User from "./User";
import Pagination from "./Pagination";



class UsersList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentPage: 0,
        itemsPerPage: 3,
      };
    }


    goNext = () => {
        this.setState({
          currentPage: this.state.currentPage + 1
        })
    
    }

    goPrev = () => {
        this.setState({
          currentPage: this.state.currentPage - 1
        })
    }   
    
    


    render() {

        const { currentPage, itemsPerPage } = this.state;
        const { users } = this.props;
        const start = currentPage * itemsPerPage;
        const end = start + itemsPerPage;

        const ShowUsers = users.slice(start, end);


        return(
            <div>
                <Pagination
                    goPrev={this.goPrev}
                    goNext={this.goNext}
                    currentPage={this.state.currentPage}
                    itemsPerPage={this.state.itemsPerPage}
                    totalItems={this.props.users.length}
                />
                <ul className="users">
                    {ShowUsers.map((user) => (
                        <User key={user.id} {...user} />
                    ))}
                </ul>
            </div>
        )
    }
};

export default UsersList;