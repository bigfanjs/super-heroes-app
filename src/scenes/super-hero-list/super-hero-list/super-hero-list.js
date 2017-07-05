import React from "react";
import {connect} from "react-redux";

import HeroItem from "../super-hero-item";

const HeroList = function ({ heroes }) {
  return (
    <ul>
      { heroes.map((hero) => <HeroItem key={hero.id} hero={hero} />)}
    </ul>
  );
};

const mapStateToProps = function ({ heroes }) {
  return { heroes };
}

export default connect(mapStateToProps)(HeroList);