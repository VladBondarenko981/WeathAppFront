import React from "react";
import classes from "./MyInput.module.css";

const MyInput = ({ type, value, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={classes.input}
    />
  );
};

export default MyInput;
