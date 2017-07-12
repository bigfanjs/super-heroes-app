import React, {Component} from "react";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import Menu from "material-ui/svg-icons/navigation/menu";

import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

import HeroList from "../super-hero-list";

const style = {
  position: "fixed",
  bottom: 20,
  right: 20
};

class App extends Component {
  constructor(props) {
    super(props);

    this.handleCreateNewHero = this.handleCreateNewHero.bind(this);
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
  }

  handleCreateNewHero() {
    this.context.router.history.push("/heroes/new");
  }

  handleMenuOpen(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <AppBar
          title="Heroes"
          onLeftIconButtonTouchTap={this.handleMenuOpen}
          style={{position: "fixed", top: 0}}
          iconElementLeft={
            <IconButton>
              <Menu />
            </IconButton>
          }
          />
        <HeroList />
        <FloatingActionButton
          secondary={true}
          style={style}
          onTouchTap={this.handleCreateNewHero}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object
};

export default App;