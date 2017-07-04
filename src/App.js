import React from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import asyncComponent from "./components/async-component";

import "./App.css";

const
  SuperHero = asyncComponent(() => import("./scenes/super-hero")),
  SuperHeroList = asyncComponent(() => import("./scenes/super-hero-list")),
  NewSuperHero = asyncComponent(() => import("./scenes/new-hero-list"));

export default function () {
  return (
    <Router>
      <div>
        <Route exact path="/" render={() => <Redirect to="/heros" />} />
        <Route exact path="/heros" component={SuperHeroList} />
        <Route path="/heros/view/:id" component={SuperHero} />
        <Route path="/heros/new" component={NewSuperHero} />
      </div>
    </Router>
  );
}