import React from "react";
import { Link, NavLink } from "react-router-dom";

import mainImg from "../../assets/mainImg.jpg";
import "./LoggedInPage.css";

const LoggedInPage = () => {
  return (
    <div className="loggedin-container">
      <h2 className="loggedin-title">С возвращением!</h2>
      <p className="loggedin-subtitle">Lorby - твой личный репетитор</p>
      <img src={mainImg} />
      <Link to="/login" className="loggedin-link">
        Выйти
      </Link>
    </div>
  );
};

export default LoggedInPage;
