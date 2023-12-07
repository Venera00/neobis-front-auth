import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import mainImg from "../../assets/mainImg.jpg";
import "./RegistrationPage.css";

const RegistrtationPage = () => {
  return (
    <div className="auth-main">
      <div className="main-wrapper">
        <div className="auth-img">
          <img src={mainImg} alt="The logo" />
        </div>
        <h3 className="auth-title">Lorby</h3>
        <p className="auth-subtitle">Твой личный репетитор</p>
      </div>

      <div className="auth-info__container">
        <Link className="auth__link" to="/">
          <div className="back-container">
            <button className="back-btn">&#8249;</button>
            <p className="back-title">Назад</p>
          </div>
        </Link>

        <Formik>
          <Form className="login-form">
            <h3>
              Создать аккаунт <br /> Lorby
            </h3>
            <input name="email" type="email" placeholder="Введи адрес почты" />
            <input name="login" type="text" placeholder="Придумай логин" />
            <input
              name="password"
              type="password"
              placeholder="Создай пароль"
            />
            <input
              name="password"
              type="password"
              placeholder="Повтори пароль"
            />

            <button className="auth-btn">Далее</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegistrtationPage;
