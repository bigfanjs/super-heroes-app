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
    const {label, value} = this.props;

    return (
      <label>
        { label }:
        <input type="text" onChange={this.handleChange} value={value} />
      </label>
    );
  }
}

const
  mapStateToProps = function ({ form }, { name }) {
    return { value: form.values[ name ] };
  },
  mapDispatchToProps = function (dispatch) {
    return {
      updateValue(name, value) {
        dispatch(updateValue(name, value));
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Field);