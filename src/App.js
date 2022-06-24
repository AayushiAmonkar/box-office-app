import React from "react";
import { Switch, Route } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route>not found</Route>
      </Switch>
    </div>
  );
};

export default App;
