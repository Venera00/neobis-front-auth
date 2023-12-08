import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, useFormik } from "formik";
import mainImg from "../../assets/mainImg.jpg";
import "./RegistrationPage.css";
import * as yup from "yup";

const passwordValidationSchema = yup.object().shape({
  email: yup.string().email("{Введите gmail}").required(),
  login: yup.string().required(),
  password: yup
    .string()
    .min(8)
    .max(15)
    .matches(
      /^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/
    ),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
    .required(),
});

const onSubmit = () => {
  console.log("Submitted");
};

const RegistrtationPage = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        login: "",
        password: "",
        repeatPassword: "",
      },
      validationSchema: passwordValidationSchema,
      onSubmit,
    });

  console.log(errors);

  const hasMinMaxSymbols =
    values.password.length >= 8 && values.password.length >= 15;
  const hasLowerCase = /[a-zа-я]/.test(values.password);
  const hasUpperCase = /[A-ZА-Я]/.test(values.password);
  const hasNumber = /[0-9]/.test(values.password);
  const hasSpecialCharacter = /[$&+,:;=?@#|'<>.-^*()%!]/.test(values.password);

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
          <Form onSubmit={handleSubmit} className="login-form">
            <h3>
              Создать аккаунт <br /> Lorby
            </h3>
            <Field
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              type="email"
              placeholder="Введи адрес почты"
              className={errors.email && touched.email ? "input-error" : ""}
              required
            />
            <Field
              value={values.login}
              onChange={handleChange}
              onBlur={handleBlur}
              name="login"
              type="text"
              placeholder="Придумай логин"
            />

            <Field
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
              type="password"
              placeholder="Создай пароль"
            />
            <ul className="">
              <li
                style={{
                  color: hasMinMaxSymbols
                    ? "green"
                    : errors.password
                    ? "red"
                    : "#767676",
                }}
              >
                От 8 до 15 символов{" "}
                {values.password.length >= 8 && values.password.length >= 15
                  ? "✅"
                  : errors.password
                  ? "❌"
                  : ""}
              </li>
              <li
                style={{
                  color:
                    hasLowerCase && hasUpperCase
                      ? "green"
                      : errors.password
                      ? "red"
                      : "#767676",
                }}
              >
                Строчные и прописные буквы
                {hasLowerCase && hasUpperCase
                  ? errors.password
                    ? "✅"
                    : "❌"
                  : ""}
              </li>
              <li
                style={{
                  color: hasNumber
                    ? "green"
                    : errors.password
                    ? "red"
                    : "#767676",
                }}
              >
                Минимум 1 цифра{" "}
                {hasNumber ? (errors.password ? "✅" : "❌") : ""}
              </li>
              <li
                style={{
                  color: hasSpecialCharacter
                    ? "green"
                    : errors.password
                    ? "red"
                    : "#767676",
                }}
              >
                Минимум 1 спецсимвол (!, ", #, $...){" "}
                {hasSpecialCharacter ? (errors.password ? "✅" : "❌") : ""}
              </li>
            </ul>

            <Field
              value={values.repeatPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              name="repeatPassword"
              type="password"
              placeholder="Повтори пароль"
            />

            <button type="button" className="auth-btn">
              Далее
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegistrtationPage;
