import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import NavigationBack from "material-ui/svg-icons/navigation/arrow-back";

import {
  addHero,
  updateHero
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

  handleClose(e) {
    e.preventDefault();
    this.context.router.history.push("/heroes");
  }

  render() {
    const {isNew, hero} = this.props;

    return (
      <div className="container">
        <AppBar
          title={(isNew ? "Create" : "Edit") + " Hero"}
          iconElementLeft={
            <IconButton onTouchTap={this.handleClose}>
              <NavigationBack />
            </IconButton>}
          />
        <div className="new-super-hero">
          <Form
            onSubmit={this.submit}
            form={isNew ? "newHero" : "editHero"}
            initialValues= {
              isNew
              ? {powers: [""],battles: [{}]}
              : hero
            }
            />
        </div>
      </div>
    );
  }
}

const
  mapStateToProps = function ({heroes, form}, {match}) {
    return {
      hero: heroes.find((hero) => hero.id === match.params.id) || {},
      isNew: typeof match.params.id === "undefined",
      form: form
    };
  },
  mapDispatchToProps = function (dispatch) {
    return {
      createHero(hero) {
        dispatch(addHero(hero));
      },
      updateHero(id,data) {
        dispatch(updateHero(id, data));
      }
    };
  };

NewHero.contextTypes = {
  router: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(NewHero);