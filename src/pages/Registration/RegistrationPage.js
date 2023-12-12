import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form, Field, useFormik } from "formik";
import register from "../../api/axios";
import mainImg from "../../assets/mainImg.jpg";
import passwordVisible from "../../assets/passwordVisible.svg";
import passwordNotVisible from "../../assets/passwordNotVisible.svg";
import { PasswordValidationSchema } from "../../components/PasswordRequirementsYup";
import "./RegistrationPage.css";

const RegistrationPage = () => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
  const history = useHistory();

  const hasMinMaxSymbols = password.length >= 8 || password.length >= 15;
  const hasLowerCase = /[a-zа-я]/.test(password);
  const hasUpperCase = /[A-ZА-Я]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialCharacter =
    password && /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/.test(password);

  // const handleChangePassword = (e) => {
  //   setPassword(e.target.value);
  //   handleChange(e);
  // };

  // const handleChangeRepeatPassword = (e) => {
  //   setRepeatPassword(e.target.value);
  //   handleChange(e);
  // };

  // const {
  //   values,
  //   errors,
  //   touched,
  //   handleBlur,
  //   handleChange,
  //   // handleSubmit,
  //   isSubmitting,
  //   handleReset,
  // } = useFormik({
  //   initialValues: {
  //     email: "",
  //     login: "",
  //     password: "",
  //     repeatPassword: "",
  //   },
  //   validationSchema: PasswordValidationSchema,
  //   onSubmit: (values, { resetForm }) => {
  //     register(values)
  //       .then((response) => {
  //         Navigate("/welcome");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  // });

  // console.log(errors);

  // const isValuesValid = () => {
  //   console.log("Form Values:", values);
  //   console.log("Form Errors:", errors);
  //   return (
  //     values.email &&
  //     values.login &&
  //     !errors.email &&
  //     !errors.login &&
  //     !errors.password &&
  //     !errors.repeatPassword &&
  //     values.password === values.repeatPassword
  //   );
  // };

  // console.log(errors.repeatPassword);

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

        <Formik
          initialValues={{
            email: "",
            login: "",
            password: "",
            repeatPassword: "",
          }}
          validationSchema={PasswordValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            register(values)
              .then((response) => {
                setSubmitting(false);
                history.push("/sendemail");
              })
              .catch((error) => {
                setSubmitting(false);
                console.log(error);
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form className="auth-form">
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
                className={errors.login && touched.login ? "input-error" : ""}
              />
              <div
                className={`password-input ${
                  errors.password && touched.password ? "input-error" : ""
                }`}
              >
                <Field
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="password"
                  type={visible ? "text" : "password"}
                  placeholder="Создай пароль"
                  className="password-field"
                />
                <div className="input-img" onClick={() => setVisible(!visible)}>
                  {visible ? (
                    <img src={passwordNotVisible} alt="Eye icon" />
                  ) : (
                    <img src={passwordVisible} alt="Eye closed icon" />
                  )}
                </div>
              </div>
              <ul>
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
                  {hasMinMaxSymbols ? "✅" : errors.password ? "❌" : ""}
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
                    ? "✅"
                    : errors.password
                    ? "❌"
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
                  {hasNumber ? "✅" : errors.password ? "❌" : ""}
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
                  Минимум 1 спецсимвол (!, ", #, $...)
                  {hasSpecialCharacter ? "✅" : errors.password ? "❌" : ""}
                </li>
              </ul>
              <div className="password-input">
                <Field
                  value={values.repeatPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="repeatPassword"
                  type={repeatPasswordVisible ? "text" : "password"}
                  placeholder="Повтори пароль"
                />
                <div
                  className="input-img"
                  onClick={() =>
                    setRepeatPasswordVisible(!repeatPasswordVisible)
                  }
                >
                  {repeatPasswordVisible ? (
                    <img src={passwordNotVisible} alt="Eye icon" />
                  ) : (
                    <img src={passwordVisible} alt="Eye closed icon" />
                  )}
                </div>
              </div>
              {errors.password && touched.repeatPassword && (
                <div className="error-msg">{errors.repeatPassword}</div>
              )}

              <button
                type="submit"
                disabled={
                  isSubmitting || values.password !== values.repeatPassword
                }
                className={
                  values.password === values.repeatPassword
                    ? "auth-btn auth-btn_black"
                    : "auth-btn auth-btn_gray"
                }
              >
                Далее
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationPage;
