import React from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import asyncComponent from "./components/async-component";

import "./App.css";

const
  EditHero = asyncComponent(() => import("./scenes/super-hero-edit")),
  Heros = asyncComponent(() => import("./scenes/super-hero-list")),
  ViewHero = asyncComponent(() => import("./scenes/super-hero-view"));

export default function () {
  return (
    <Router>
      <div>
        <Route exact path="/" render={() => <Redirect to="/heroes" />} />
        <Route exact path="/heroes" component={Heros} />
        <Route path="/heroes/edit/:id" component={EditHero} />
        <Route path="/heroes/new" component={EditHero} />
        <Route path="/heroes/view/:id" component={ViewHero} />
      </div>
    </Router>
  );
}