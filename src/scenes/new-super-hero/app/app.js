import React from "react";
import {connect} from "react-redux";

import {AddHero} from "../../../actions";
import Input from "../input-field";

import "./app.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="new-super-hero" >
        <form onSubmit={this.handleSubmit}>
          <Input name="realname" label="Real Name" />
          <Input name="nickname" label="Nick Name" />
          <Input type="submit" value="Save" />
          <Input type="reset" value="Clear" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = function ({ formData }) {
  return { values: formData };
};

export default connect(mapStateToProps)(Form);