import React, {Component} from "react";
import PropTypes from "prop-types";

import HeroList from "../super-hero-list";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleCreateNewHero = this.handleCreateNewHero.bind(this);
  }

  handleCreateNewHero() {
    this.context.router.history.push("/heroes/new");
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.handleCreateNewHero}>New Hero</button>
        <HeroList />
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object
};

export default App;