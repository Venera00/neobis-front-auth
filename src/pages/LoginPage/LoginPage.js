import React from "react";
import mainImg from "../../assets/mainImg.jpg";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-info">
        <img src={mainImg} />
        <h3 className="login-title">Lorby</h3>
        <p className="login-subtitle">Твой личный репетитор</p>
      </div>

      <div className="login-form__container">
        <div className="back-container">
          <button className="back-btn">&#8249;</button>
          <p className="back-title">Назад</p>
        </div>
        <form>
          <h3>Создать аккаунт Lorby</h3>
          <input type="email" placeholder="Введи адрес почты" />
          <input type="text" placeholder="Придумай логин" />
          <input type="password" placeholder="Создай пароль" />
          <input type="password" placeholder="Повтори пароль" />

          <button>Далее</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
