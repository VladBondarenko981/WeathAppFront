import React, { useState } from "react";
import LoginTable from "../components/LoginTable/LoginTable.tsx";
import { handleLogin } from "../api/loginApi.ts";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const token = await handleLogin({ email, password });
      console.log("Login successful, token:", token);
      localStorage.setItem("token", token);
      window.location.reload();
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <LoginTable
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onLogin={handleSubmit}
    />
  );
};

export default LoginPage;
