import React from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import asyncComponent from "./components/async-component";

import "./App.css";

const
  EditHero = asyncComponent(() => import("./scenes/super-hero-edit")),
  Heros = asyncComponent(() => import("./scenes/super-hero-list"));

export default function () {
  return (
    <Router>
      <div>
        <Route exact path="/" render={() => <Redirect to="/heros" />} />
        <Route exact path="/heros" component={Heros} />
        <Route path="/heros/edit/:id" component={EditHero} />
        <Route path="/heros/new" component={EditHero} />
      </div>
    </Router>
  );
}