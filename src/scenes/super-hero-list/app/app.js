import React, {Component} from "react";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import Menu from "material-ui/svg-icons/navigation/menu";
import FlatButton from "material-ui/FlatButton";

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
        <AppBar
          title="Heroes"
          iconElementLeft={
            <IconButton>
              <Menu />
            </IconButton>
          }
          iconElementRight={<FlatButton label="New Hero" />}
          />
        <HeroList />
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object
};

export default App;