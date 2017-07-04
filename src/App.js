import React from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import asyncComponent from "./components/async-component";

import "./App.css";

const
  ViewHero = asyncComponent(() => import("./scenes/super-hero")),
  Heros = asyncComponent(() => import("./scenes/super-hero-list")),
  NewHero = asyncComponent(() => import("./scenes/new-super-hero"));

export default function () {
  return (
    <Router>
      <div>
        <Route exact path="/" render={() => <Redirect to="/heros" />} />
        <Route exact path="/heros" component={Heros} />
        <Route path="/heros/view/:id" component={ViewHero} />
        <Route path="/heros/new" component={NewHero} />
      </div>
    </Router>
  );
}