import React from "react";
import {connect} from "react-redux";

import {updateValue} from "../../../actions";

class Field extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.updateValue(this.props.name, e.target.value);
  }

  render() {
    const {label, value, type} = this.props;

    if (!label) {
      return <input type={type} value={value} />;
    }

    return (
      <label>
        { label }:
        <input type={type} onChange={this.handleChange} value={value} />
      </label>
    );
  }
}

const
  mapStateToProps = function ({ form }, { name, value, label }) {
    return {
      value: label ? form.values[ name ] : value
    };
  },
  mapDispatchToProps = function (dispatch) {
    return {
      updateValue(name, value) {
        dispatch(updateValue(name, value));
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Field);