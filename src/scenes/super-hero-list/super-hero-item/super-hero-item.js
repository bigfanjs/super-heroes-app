import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Card, CardActions, CardHeader} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

import {removeHero} from "../../../actions";

class Hero extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleView = this.handleView.bind(this);
  }

  handleDelete() {
    this.props.dispatch(removeHero(this.props.hero.id));
  }

  handleView() {
    this.context.router.history.push("/heroes/view/" + this.props.hero.id);
  }

  render() {
    const {realname, nickname} = this.props.hero;

    return (
      <li>
        <Card>
          <CardHeader
            title={nickname}
            subtitle={realname}
            style={{backgroundColor: "#f0f0f0"}}
            />
          <CardActions>
            <FlatButton
              label="VIEW"
              primary={true}
              onTouchTap={this.handleView} />
            <FlatButton
              label="DELETE"
              secondary={true}
              onTouchTap={this.handleDelete} />
          </CardActions>
        </Card>
      </li>
    );
  }
}

Hero.contextTypes = {
  router: PropTypes.object
};

export default connect()(Hero);