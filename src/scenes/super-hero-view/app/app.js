import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import NavigationBack from "material-ui/svg-icons/navigation/arrow-back";
import FlatButtom from "material-ui/FlatButton";

import BasicInfo from "../basic-info";
import Battles from "../battles";
import Powers from "../powers";

class ViewHero extends Component {
  constructor(props) {
    super(props);

    this.handleBack = this.handleBack.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleBack(e) {
    e.preventDefault();
    this.context.router.history.push("/heroes");
  }

  handleEdit(e) {
    e.preventDefault();
    const id = this.props.hero.id;
    this.context.router.history.push("/heroes/edit/" + id);
  }

  render() {
    const hero = this.props.hero;

    return (
      <div>
        <AppBar
          title={hero.nickname}
          style={{position: "fixed", top: 0}}
          onLeftIconButtonTouchTap={this.handleBack}
          onRightIconButtonTouchTap={this.handleEdit}
          iconElementLeft={
            <IconButton>
              <NavigationBack/>
            </IconButton>}
          iconElementRight={
            <FlatButtom label="EDIT" />
          }
          />
        <ul style={{marginTop: "80px"}} >
          <BasicInfo hero={hero} />
          <Powers powers={hero.powers} />
          <Battles battles={hero.battles} />
        </ul>
      </div>
    );
  }
}

ViewHero.contextTypes = {
  router: PropTypes.object
};

const mapStateToProps = function ({heroes, form}, {match}) {
  return {
    hero: heroes.find((hero) => hero.id === match.params.id) || {}
  };
};

export default connect(mapStateToProps)(ViewHero);