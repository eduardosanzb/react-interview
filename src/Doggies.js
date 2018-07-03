import React from "react";
import { users } from "./user.api";

class Doggies extends React.PureComponent {
  state = {
    users: []
  };

  componentDidMount() {
    users().then(users => this.setState({ users }));
  }

  renderButtonList = u => (
    <li style={{ listStyleType: "none", marginBottom: 10 }}>
      <button onClick={() => this.props.onClick(u)}>DoggyID: {u.id}</button>
    </li>
  );

  render() {
    return (
      <React.Fragment>
        <h1> The cute 🐶 list </h1>
        <ul>{this.state.users.map(this.renderButtonList)}</ul>
      </React.Fragment>
    );
  }
}
export default Doggies;
