import React, { useState } from "react";
import RegistrationTable from "../components/RegistrationTable/RegistrationTable.tsx";
import { handleRegistration } from "../api/registrationApi.ts";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async () => {
    try {
      const token = await handleRegistration({ email, password, username });
      console.log("Registration successful, token:", token);
      localStorage.setItem("token", token);
      window.location.reload();
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <RegistrationTable
      email={email}
      password={password}
      username={username}
      setEmail={setEmail}
      setPassword={setPassword}
      setUsername={setUsername}
      onRegistration={handleSubmit}
    />
  );
};

export default RegistrationPage;
