import React from "react";
import { render } from "react-dom";
import User from "./User";
import Users from "./Users";
import Loading from "./Loading";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

/**
 * Imagine you just received this project as a legacy cobase, please work throug the next points.
 * Own and enhance the project.
 *
 * Points to consider:
 * 1. Implement the <User /> to work how is being used at index.js.
 * 2. Implement the selection of the user via the <Users />.
 * 3. Improve the id() generator.
 * 4. How would you improve this app architecture.
 * 5. Improve the file directory/structure.
 * 6. If enough time, implement redux/mobx.
 * 7. How else would you improve this app.
 */

const App = () => (
  <div style={styles}>
    <Users />
    <User id="3">
      {user => (!user ? <Loading /> : <p>{user.firstName}</p>)}
    </User>
  </div>
);

render(<App />, document.getElementById("root"));
