import React, {Component} from "react";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {Step, Stepper, StepLabel, StepContent} from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";

import BasicInfo from "../basic-info";
import Powers from "../powers";
import Battles from "../battles";

import {stepForward, stepBackwards} from "../../../actions";

class Form extends Component {
  constructor(props) {
    super(props);

    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.renderStepActions = this.renderStepActions.bind(this);
  }

  handleNext() {
    this.props.stepForward();
  }

  handlePrev() {
    this.props.stepBackwards();
  }

  renderStepActions(step) {
    return (
      <div style={{margin: "10px 0"}}>
        {
          step === 2
            ? <RaisedButton
                type="submit"
                label="SUBMIT"
                primary={true}
                />
            : <RaisedButton
                label="NEXT"
                onTouchTap={this.handleNext}
                primary={true}
                />
        }
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={step === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {index, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Stepper
          activeStep={index}
          orientation="vertical"
          style={{backgroundColor: "#eeeeee"}}>
          <Step>
            <StepLabel>Basic Info</StepLabel>
            <StepContent>
              <BasicInfo/>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Powers</StepLabel>
            <StepContent>
              <Powers />
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Battles</StepLabel>
            <StepContent>
              <Battles />
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
      </form>
    );
  }
}

const
  mapStateToProps = function ({stepIndex}) {
    return { index: stepIndex, };
  },
  mapDispatchToProps = function (dispatch) {
    return {
      stepForward() {
        dispatch(stepForward());
      },
      stepBackwards() {
        dispatch(stepBackwards());
      }
    };
  };

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default reduxForm({form: "heroes"})(FormContainer);