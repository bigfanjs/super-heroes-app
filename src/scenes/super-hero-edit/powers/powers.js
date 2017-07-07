import React, {Component} from "react";
import {Field, FieldArray} from "redux-form";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import IconButton from "material-ui/IconButton";
import ActionHome from "material-ui/svg-icons/action/delete";

const Power = ({input, label, meta: { touched, error }, ...custom}) => (
  <TextField
    hintText={custom.placeholder}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

class Powers extends Component {
  componentDidMount() {
    this.props.fields.push();
  }

  render() {
    const {fields, meta: { error }} = this.props;

    return (
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <RaisedButton label="Add Power" onTouchTap={() => fields.push()} />
        </li>
        { fields.map((power, index) => (
          <li key={index}>
            <Field
              name={power}
              type="text"
              component={Power}
              label={`Power #${index + 1}`}
            />
            <IconButton
              label="Remove power"
              iconStyle={{color: "#e62828", width: "30px", height: "30px"}}
              onTouchTap={() => fields.remove(index)}>
                <ActionHome />
              </IconButton>
          </li>
        ))}
        {error && <li className="error">{error}</li>}
      </ul>
    );
  }
}

export default function () {
  return (
    <FieldArray name="powers" component={Powers} />
  );
}