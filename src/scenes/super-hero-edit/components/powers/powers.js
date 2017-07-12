import React from "react";
import {Field, FieldArray} from "redux-form";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import IconButton from "material-ui/IconButton";
import ActionHome from "material-ui/svg-icons/action/delete";

import {required, maxLength, minLength} from "../../services/validations";

const Power = ({input, label, meta: { touched, error }, ...custom}) => (
  <TextField
    hintText={custom.placeholder}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const Powers = function ({fields, meta: { error }}) {
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      <li>
        <RaisedButton
          label="Add Power"
          onTouchTap={() => fields.push()}
          />
      </li>
      { fields.map((power, index) => (
        <li key={index}>
          <Field
            name={power}
            type="text"
            component={Power}
            label={`Power #${index + 1}`}
            validate={[required, maxLength(30), minLength(3)]}
            />
          <IconButton
            label="Remove power"
            iconStyle={{color: "#e62828", width: "30px", height: "30px"}}
            onTouchTap={() => fields.remove(index)}>
              <ActionHome />
            </IconButton>
        </li>
      ))}
      { error && <li className="error">{error}</li> }
    </ul>
  );
};

export default function () {
  return (
    <FieldArray name="powers" component={Powers} />
  );
}