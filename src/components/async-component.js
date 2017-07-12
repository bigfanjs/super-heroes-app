import React, {Component} from "react";

import LoadingDialog from "./loading";

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({ component });
    }

    render() {
      const Component = this.state.component;

      return Component
        ? <Component {...this.props} />
        : <LoadingDialog />;
    }

  }

  return AsyncComponent;
}