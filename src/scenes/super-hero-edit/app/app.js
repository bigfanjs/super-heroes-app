import React, {Component} from "react";
import {connect} from "react-redux";

import {addHero, resetValues} from "../../../actions";

import Field from "../field";
import Form from "../form";

import "./app.css";

class NewHero extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    const {createHero, resetForm} = this.props;

    createHero(data);
    resetForm();
  }

  render() {
    return (
      <div className="new-super-hero">
        <Form onSubmit={this.handleSubmit}>
          <Field name="realname" label="Real Name" />
          <Field name="nickname" label="Nick Name" />
          <Field type="submit" value="Save" />
          <Field type="reset" value="Clear" />
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    createHero(hero) {
      dispatch(addHero(hero));
    },
    resetForm() {
      dispatch(resetValues());
    }
  };
};

export default connect(undefined, mapDispatchToProps)(NewHero);