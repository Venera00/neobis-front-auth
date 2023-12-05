import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import mainImg from "../../assets/mainImg.jpg";
import passwordVisible from "../../assets/passwordVisible.svg";
import passwordNotVisible from "../../assets/passwordNotVisible.svg";
import "./LoginPage.css";

const LoginPage = () => {
  const notify = () =>
    toast("Неверный логин или пароль", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div className="login-container">
      <div className="login-info">
        <img src={mainImg} alt="The logo" className="login-img" />
        <h3 className="login-title">Lorby</h3>
        <p className="login-subtitle">Твой личный репетитор</p>
      </div>

      <div className="login-form__container">
        {/* <div className="back-container">
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
        </form> */}

        <h3 className="login-form__title">Велком бэк!</h3>
        <form className="login-form">
          <input
            type="text"
            placeholder="Введи туда-сюда логин"
            className="login__text"
          />
          <div className="password-input">
            <input
              type="password"
              placeholder="Пароль (тоже введи)"
              className="login__password"
            />
            <img src={passwordVisible} className="input-img" />
          </div>
          <button className="login__btn">Войти</button>
        </form>

        <Link className="login__link">
          <p>У меня еще нет аккаунта</p>
        </Link>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginPage;
