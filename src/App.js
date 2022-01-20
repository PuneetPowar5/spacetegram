import React from "react";
import Welcome from "./components/Welcomepage";
import Data from "./components/Data";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/data">
          <Data />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
