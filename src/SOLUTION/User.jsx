import React from "react";
import PropTypes from "prop-types";
import { user as fetchUser } from "../user.api.js";

class User extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    fetchUser(this.props.id).then(user => this.setState({ user }));
  }

  render() {
    return this.props.children(this.state.user);
  }
}

User.Proptypes = {
  children: PropTypes.func.isRequired
};

export default User;
