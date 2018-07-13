import React from "react";
import { render } from "react-dom";
import Dog from "./Dog";
import Doggies from "./Doggies";
import Loading from "./Loading";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  margin: 10
};

/**
 * Imagine you just received this project as a legacy cobase,
 *  please work throug the next points.
 * Own and enhance the project.
 *
 * Points to consider:
 * 1. Implement the <Dog /> without modifying the index.js.
 * 2. Implement the selection of the dog via the <Doggies />.
 * 3. Improve the id() generator.
 * 4. How would you improve this app architecture.
 * 5. Improve the file directory/structure.
 * 6. If enough time, implement redux/mobx/React.Context.
 * 7. How else would you improve this app.
 */

const App = () => (
  <div style={styles}>
    <Doggies
      onClick={clickedUser => {
        console.log(clickedUser);
      }}
    />
    <Dog>{dog => (!dog ? <Loading /> : <p>{dog.firstName}</p>)}</Dog>
  </div>
);

render(<App />, document.getElementById("root"));
