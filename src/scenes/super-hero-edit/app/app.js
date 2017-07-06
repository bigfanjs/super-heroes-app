import React, {Component} from "react";
import {connect} from "react-redux";

import {addHero, updateHero, resetValues, updateAllformValues} from "../../../actions";

import Field from "../field";
import Form from "../form";
import Submit from "../submit-button";

import "./app.css";

class NewHero extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount () {
    const {isNew, hero, updateValues} = this.props;

    if (!isNew) {
      updateValues(hero);
    }
  }

  handleSubmit(data) {
    const {createHero, updateHero, resetForm, hero, isNew} = this.props;

    if (isNew) {
      createHero(data);
    } else {
      updateHero(hero.id, data);
    }

    resetForm();
  }

  render() {
    return (
      <div className="new-super-hero">
        <Form onSubmit={this.handleSubmit}>
          <Field name="realname" label="Real Name" />
          <Field name="nickname" label="Nick Name" />
          <Submit />
        </Form>
      </div>
    );
  }
}

const
  mapStateToProps = function ({ heroes }, {match}) {
    return {
      hero: heroes.find((hero) => hero.id === match.params.id) || {},
      isNew: typeof match.params.id === "undefined",
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

export default connect(mapStateToProps, mapDispatchToProps)(NewHero);