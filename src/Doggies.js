import React from "react";
import { doggiesAPI } from "./user.api";

const buttonStyle = {
  backgroundColor: "#008CBA",
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline - block",
  fontSize: 16
};

class Doggies extends React.PureComponent {
  state = {
    doggies: []
  };

  componentDidMount() {
    doggiesAPI().then(doggies => this.setState({ doggies }));
  }

  renderButtonList = u => (
    <div style={{ listStyleType: "none", marginBottom: 10 }}>
      <button style={buttonStyle} onClick={() => this.props.onClick(u)}>
        DoggyID: {u.id}
      </button>
    </div>
  );

  render() {
    return (
      <div style={{ borderWidth: 2, borderStyle: "solid", borderRadius: 25 }}>
        <h1> The cute 🐶 list </h1>
        {this.state.doggies.map(this.renderButtonList)}
      </div>
    );
  }
}
export default Doggies;
