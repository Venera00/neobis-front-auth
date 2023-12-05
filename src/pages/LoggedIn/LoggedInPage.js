import React from "react";

import mainImg from "../../assets/mainImg.jpg";
import "./LoggedInPage.css";

const LoggedInPage = () => {
  return (
    <div className="loggedin-conatiner">
      <h2 className="loggedin-title">С возвращением!</h2>
      <p className="loggedin-subtitle">Lorby - твой личный репетитор</p>
      <img src={mainImg} />
    </div>
  );
};

export default LoggedInPage;
