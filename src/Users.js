import React from "react";
import { users } from "./user.api";

class Users extends React.PureComponent {
  state = {
    users: []
  };

  componentDidMount() {
    users().then(users => this.setState({ users }));
  }

  render() {
    return <ul>{this.state.users.map(u => <li>{u.id}</li>)}</ul>;
  }
}
export default Users;
