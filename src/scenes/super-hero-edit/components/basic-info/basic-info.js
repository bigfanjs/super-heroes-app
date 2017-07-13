import React from "react";
import {Field} from "redux-form";
import TextField from "material-ui/TextField";

import {
  required,
  maxLength,
  minLength,
  minValue,
  tooOld
} from "../../services/validations";

const Input = ({input, label, meta: { touched, error }, ...custom}) => (
  <TextField
    fullWidth={true}
    hintText={custom.placeholder}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

export default function () {
  return (
    <div>
      <Field
        name="realname"
        label="Real Name"
        component={Input}
        validate={[required, maxLength(20), minLength(4)]}
        />
      <Field
        name="nickname"
        label="Nick Name"
        component={Input}
        validate={[required, maxLength(20), minLength(6)]}
        />
      <Field
        name="girlfriend"
        label="Girlfriend"
        component={Input}
        />
      <Field
        name="age"
        label="Age"
        type="number"
        component={Input}
        validate={[required, minValue(22), tooOld]}
        />
      <Field
        name="story"
        label="Story"
        component={Input}
        multiLine={true}
        validate={[required, minLength(50), maxLength(300)]}
        />
    </div>
  );
}