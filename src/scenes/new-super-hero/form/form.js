import React, {Component} from "react";
import {connect} from "react-redux";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.props.values);
  }

  render() {
    return (
      <div className="new-super-hero" >
        <form onSubmit={this.handleSubmit}>
          { this.props.children }
        </form>
      </div>
    );
  }
}

const mapStateToProps = function ({ form }) {
  return { values: form.values };
};

export default connect(mapStateToProps)(Form);