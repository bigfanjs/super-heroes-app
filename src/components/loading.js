import React from "react";
import Paper from "material-ui/Paper";
import RefreshIndicator from "material-ui/RefreshIndicator";

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const refresh = {
  display: "inline-block",
  position: "relative",
};

export default function () {
  return (
    <Paper style={style} zDepth={1}>
      <RefreshIndicator
        size={40}
        left={10}
        top={0}
        status="loading"
        style={refresh}
        />
    </Paper>
  );
}