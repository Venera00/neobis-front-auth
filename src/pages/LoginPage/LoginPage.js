import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { login } from "../../api/axios";
import mainImg from "../../assets/mainImg.jpg";
import passwordVisible from "../../assets/passwordVisible.svg";
import passwordNotVisible from "../../assets/passwordNotVisible.svg";
import "./LoginPage.css";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("");

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

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userData = { username, password };
      const response = await login(userData);
    } catch (error) {
      console.log("Login failed", error);
      notify();
    }
  };

  return (
    <div className="login-container">
      <div className="login-info">
        <img src={mainImg} alt="The logo" className="login-img" />
        <h3 className="login-title">Lorby</h3>
        <p className="login-subtitle">Твой личный репетитор</p>
      </div>

      <div className="login-form__container">
        <h3 className="login-form__title">Велком бэк!</h3>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Введи туда-сюда логин"
            className="login__text"
          />
          <div className="password-input">
            <input
              value={password}
              type={visible ? "text" : "password"}
              placeholder="Пароль (тоже введи)"
              onChange={(e) => setPassword(e.target.value)}
              className="login__password"
            />
            <div className="input-img" onClick={() => setVisible(!visible)}>
              {visible ? (
                <img src={passwordNotVisible} alt="Eye icon" />
              ) : (
                <img src={passwordVisible} alt="Eye closed icon" />
              )}
            </div>
          </div>
          <button className="login__btn">Войти</button>
        </form>

        <Link to="/registration" className="login__link">
          <p>У меня еще нет аккаунта</p>
        </Link>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginPage;
