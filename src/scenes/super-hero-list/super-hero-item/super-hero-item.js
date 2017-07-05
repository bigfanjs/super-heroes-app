import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {removeHero} from "../../../actions";

class Hero extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(id) {
    this.props.dispatch(removeHero(id));
  }

  handleEdit() {
    this.context.router.history.push("/heroes/edit/" + this.props.hero.id);
  }

  render() {
    const {realname, nickname} = this.props.hero;

    return (
      <li>
        <h2>{ nickname }</h2>
        <p>{ realname }</p>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}

Hero.contextTypes = {
  router: PropTypes.object
};

export default connect()(Hero);