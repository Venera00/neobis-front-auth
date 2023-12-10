import { useState } from "react";
import mainImg from "../../assets/mainImg.jpg";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <h2 className="welcome-title">Добро пожаловать!</h2>
      <p className="welcome-subtitle">Lorby - твой личный репетитор</p>
      <img src={mainImg} />
      <button className="welcome-btn">Выйти</button>
    </div>
  );
};

export default WelcomePage;
