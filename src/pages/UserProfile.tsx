import React, { useState, useEffect } from "react";
import UserTable from "../components/UserTable/UserTable.tsx";
import { UserData } from "../types/types.ts";

const UserProfile = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  const getPayloadFromToken = (token: string) => {
    const base64Url = token.split(".")[1]; // Разделяем токен на части и берем payload
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/"); // Декодируем Base64URL в стандартный Base64
    const jsonPayload = JSON.parse(atob(base64)); // Декодируем Base64 в строку и парсим JSON
    return jsonPayload; // Возвращаем данные из токена
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log(getPayloadFromToken(token));
      setUserData(getPayloadFromToken(token)); // Обновляем данные после первого рендера
    }
  }, []);
  return <UserTable userData={userData} />;
  //Avatar, username, mail, password
};

export default UserProfile;
