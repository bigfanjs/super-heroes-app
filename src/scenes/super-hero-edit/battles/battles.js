import React from "react";
import {Card, CardActions, CardText} from "material-ui/Card";
import {Field, FieldArray} from "redux-form";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import {RadioButton, RadioButtonGroup} from "material-ui/RadioButton";
import DatePicker from "material-ui/DatePicker";

const Battle = ({input, label, meta: { touched, error }, ...custom}) => (
  <TextField
    fullWidth={true}
    hintText={custom.placeholder}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
    />
);

const renderRadioGroup = ({input, ...rest}) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

const Battles = function ({fields, meta: { touched, error, submitFailed }}) {
  return (
    <div>
      {(touched || submitFailed) && error && <span>{error}</span>}
      { fields.map((battle, index) => (
        <Card key={index} style={{marginBottom: "15px"}}>
          <CardText>
            <Field
              name={`${battle}.against`}
              type="text"
              component={Battle}
              label="Against"
            />
            <Field
              name={`${battle}.result`}
              component={renderRadioGroup}
              style={{marginTop: "20px"}}>
              <RadioButton value="win" label="WIN" />
              <RadioButton value="lose" label="LOSE" />
            </Field>
            <Field
              type="number"
              name={`${battle}.year`}
              component={Battle}
              label="Year"
            />
          </CardText>
          <CardActions>
            <FlatButton
              label="delete"
              onTouchTap={() => fields.remove(index)}
              />
          </CardActions>
        </Card>
      ))}
      <RaisedButton
        label="Add Battle"
        onTouchTap={() => fields.push({})}
        fullWidth
        />
    </div>
  );
};

export default function () {
  return (
    <FieldArray name="battles" component={Battles} />
  );
}