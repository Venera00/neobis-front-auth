import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, useFormik } from "formik";
import mainImg from "../../assets/mainImg.jpg";
import "./RegistrationPage.css";

const RegistrtationPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      login: "",
      password: "",
      repeatPassword: "",
    },
  });

  console.log(formik);

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
            <Field
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              type="email"
              placeholder="Введи адрес почты"
            />
            <Field
              value={formik.values.login}
              onChange={formik.handleChange}
              name="login"
              type="text"
              placeholder="Придумай логин"
            />

            <Field
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              type="password"
              placeholder="Создай пароль"
            />
            <ul className="">
              <li>От 8 до 15 символов</li>
              <li>Строчные и прописные буквы</li>
              <li>Минимум 1 цифра</li>
              <li>Минимум 1 спецсимвол (!, ", #, $...)</li>
            </ul>

            <Field
              value={formik.values.repeatPassword}
              onChange={formik.handleChange}
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
