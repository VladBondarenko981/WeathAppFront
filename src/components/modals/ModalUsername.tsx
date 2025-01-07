import React, { useState } from "react";
import classes from "./Modals.module.css";
import MyInput from "../UI/MyInput/MyInput.tsx";
import MyButton from "../UI/MyButton/MyButton.tsx";
import { changeUsername } from "../../api/profileApi.ts";
import { useNavigate } from "react-router-dom";

interface ModalUsernameProps {
  onClose: () => void;
}

const ModalUsername: React.FC<ModalUsernameProps> = ({ onClose }) => {
  const [oldUsername, setOldUsername] = useState<string>("");
  const [newUsername, setNewUsername] = useState<string>("");
  const navigate = useNavigate();

  const handleChangeUsername = async () => {
    changeUsername({ oldUsername, newUsername });
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
    onClose();
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={classes.modalContainer} onClick={handleClickOutside}>
      <div className={classes.modalContent}>
        <h2>Смена пользователя</h2>
        <label>Старый юзернейм:</label>
        <MyInput
          type="text"
          value={oldUsername}
          onChange={(e) => setOldUsername(e.target.value)}
        />
        <label>Новый юзернейм:</label>
        <MyInput
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <MyButton onClick={handleChangeUsername}>Сменить пользователя</MyButton>
      </div>
    </div>
  );
};

export default ModalUsername;
