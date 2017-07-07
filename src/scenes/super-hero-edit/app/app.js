import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import NavigationClose from "material-ui/svg-icons/navigation/close";

import {
  addHero,
  updateHero,
  resetValues,
  updateAllformValues,
} from "../../../actions";

import Form from "../redux-form";

import "./app.css";

class NewHero extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.submit = this.submit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount () {
    const {isNew, hero, updateValues} = this.props;

    if (!isNew) {
      updateValues(hero);
    }
  }

  handleSubmit(data) {
    const {createHero, updateHero, hero, isNew} = this.props;

    if (isNew) {
      createHero(data);
    } else {
      updateHero(hero.id, data);
    }

    this.context.router.history.push("/heroes");
  }

  submit(data) {
    const {createHero, updateHero, resetForm, hero, isNew} = this.props;

    if (isNew) {
      createHero(data);
    } else {
      updateHero(hero.id, data);
    }

    resetForm();
    this.context.router.history.push("/heroes");
  }

  handleClose() {
    this.context.router.history.push("/heroes");
  }

  render() {
    return (
      <div className="container">
        <AppBar
          title="Heroes"
          iconElementLeft={
            <IconButton onTouchTap={this.handleClose}>
              <NavigationClose />
            </IconButton>}
          />
        <div className="new-super-hero">
          <Form onSubmit={this.submit} />
        </div>
      </div>
    );
  }
}

const
  mapStateToProps = function ({heroes}, {match}) {
    return {
      hero: heroes.find((hero) => hero.id === match.params.id) || {},
      isNew: typeof match.params.id === "undefined"
    };
  },
  mapDispatchToProps = function (dispatch) {
    return {
      createHero(hero) {
        dispatch(addHero(hero));
      },
      updateHero(id,data) {
        dispatch(updateHero(id, data));
      },
      resetForm() {
        dispatch(resetValues());
      },
      updateValues(values) {
        dispatch(updateAllformValues(values));
      }
    };
  };

NewHero.contextTypes = {
  router: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(NewHero);