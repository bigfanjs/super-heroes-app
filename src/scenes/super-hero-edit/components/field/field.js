import React from "react";
import {connect} from "react-redux";
import TextField from "material-ui/TextField";

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
    const {label, value, placeholder} = this.props;

    return (
      <TextField
        fullWidth
        floatingLabelText={label}
        hintText={placeholder}
        onChange={this.handleChange}
        value={value}
        />
    );
  }
}

const
  mapStateToProps = function ({ form }, { name }) {
    return { value: form.values[ name ] || "" };
  },
  mapDispatchToProps = function (dispatch) {
    return {
      updateValue(name, value) {
        dispatch(updateValue(name, value));
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Field);