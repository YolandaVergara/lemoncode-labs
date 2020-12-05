import React from "react";
const logo = require("./content/logoLemoncode.png");
const classes = require("./styles.scss");

export const ExerciseComponent: React.FC = () => {
  return (
    <div className={classes.background}>
      <h2>Archivo de React</h2>
      <img src={logo} className={classes.logo} />
    </div>
  );
};