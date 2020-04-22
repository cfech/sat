import React from "react";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Home from "./pages/HomePage"
import { BrowserRouter, Route, Switch } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    //no match must be last
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path = "*" component = {NoMatch}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
