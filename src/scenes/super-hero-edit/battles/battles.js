import React, {Component} from "react";
import {Card, CardActions, CardText} from "material-ui/Card";
import {Field, FieldArray} from "redux-form";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

const Battle = ({input, label, meta: { touched, error }, ...custom}) => (
  <TextField
    fullWidth
    hintText={custom.placeholder}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

class Battles extends Component {
  componentDidMount() {
    this.props.fields.push();
  }

  render() {
    const { fields, meta: { touched, error, submitFailed } } = this.props;

    return (
      <div>
        {(touched || submitFailed) && error && <span>{error}</span>}
        {fields.map((battle, index) => (
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
                type="text"
                component={Battle}
                label="Result"
              />
              <Field
                name={`${battle}.date`}
                type="text"
                component={Battle}
                label="Date"
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
  }
}

export default function () {
  return (
    <FieldArray name="battles" component={Battles} />
  );
}