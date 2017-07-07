import React from "react";
import {Field} from "redux-form";
import TextField from "material-ui/TextField";

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
      <Field name="realname" label="Real Name" component={Input} />
      <Field name="nickname" label="Nick Name" component={Input} />
      <Field name="girlfriend" label="Girl friend" component={Input} />
      <Field name="age" label="Age" component={Input} />
    </div>
  );
}