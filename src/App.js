import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import { CheckoutPage, Home, Shop } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </Router>
  );
}

export default App;
