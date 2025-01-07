import React, { useState } from "react";
import classes from "./RegistrationTable.module.css";
import MyButton from "../UI/MyButton/MyButton.tsx";
import MyInput from "../UI/MyInput/MyInput.tsx";

interface RegistrationTableProps {
  email: string;
  password: string;
  username: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  onRegistration: () => void;
}

const RegistrationTable: React.FC<RegistrationTableProps> = ({
  email,
  password,
  username,
  setEmail,
  setPassword,
  setUsername,
  onRegistration,
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
      <div className={classes.inputContainer}>
        <label htmlFor="username">Введите ваш юзернейм:</label>
        <MyInput
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <MyButton onClick={onRegistration}>Click</MyButton>
    </div>
  );
};

export default RegistrationTable;
