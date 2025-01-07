import React, { useState } from "react";
import classes from "./LoginTable.module.css";
import MyButton from "../UI/MyButton/MyButton.tsx";
import MyInput from "../UI/MyInput/MyInput.tsx";

interface LoginTableProps {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onLogin: () => void;
}

const LoginTable: React.FC<LoginTableProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  onLogin,
}) => {
  return (
    <div className={classes.mainStyle}>
      <div className={classes.inputContainer}>
        <label htmlFor="email">Введите ваш email:</label>
        <MyInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={classes.inputContainer}>
        <label htmlFor="password">Введите ваш пароль:</label>
        <MyInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <MyButton onClick={onLogin}>Click</MyButton>
    </div>
  );
};

export default LoginTable;
