import React from "react";
import classes from "./MyButton.module.css";

interface MyButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const MyButton: React.FC<MyButtonProps> = ({ onClick, children }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;
