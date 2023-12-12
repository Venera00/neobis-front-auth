import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mainImg from "../../assets/mainImg.jpg";
import SendSecondEmailModal from "../../components/Modal/SendSecondEmailModal";
import "./SendEmail.css";
import instance, { emailSend } from "../../api/axios";

const SendEmailReq = ({ token }) => {
  useEffect(() => {
    if (token) {
      emailSend(token)
        .then((data) => {
          console.log("Email confirm successful", data);
        })
        .catch((error) => {
          console.log("Email confirm failed", error);
        });
    }
  }, [token]);
};

const SendEmail = ({ email }) => {
  const [showModal, setShowModal] = useState(false);

  const sendEmail = async () => {
    try {
      const response = await emailSend("/users/confirm-email/{token}/");
      console.log("Email sent successfully", response);
    } catch (error) {
      console.log("Email sending failed", error);
    }
  };

  const resendEmail = async () => {
    try {
      const response = await instance.post("/users/resend-confirmation-email/");
      console.log("Email resent successfully", response.data);
    } catch (error) {
      console.log("Failed to resend email", error);
    }
  };

  const handleShowModal = async () => {
    await sendEmail();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="send-container">
      <div className="send-wrapper">
        <div className="auth-img">
          <img src={mainImg} alt="The logo" />
        </div>
        <h3 className="auth-title">Lorby</h3>
        <p className="auth-subtitle">Твой личный репетитор</p>
      </div>

      <div className="send-content__wrapper">
        <Link className="auth__link" to="/">
          <div className="back-container">
            <button className="back-btn">&#8249;</button>
            <p className="back-title">Назад</p>
          </div>
        </Link>

        <div className="send-info">
          <h3 className="send-title">
            Выслали письмо со ссылкой для <br /> завершения регистрации <br />
            на {email}
          </h3>
          <p className="send-subtitle">
            Если письмо не пришло, <br />
            не спеши ждать совиную почту - <br /> лучше
            <span>проверь ящик “Спам”</span>
          </p>
          <p className="send-signs">(´｡• ω •｡`)</p>

          <button onClick={handleShowModal} className="send-btn">
            Письмо не пришло
          </button>
          {showModal && <SendSecondEmailModal onClose={handleCloseModal} />}
        </div>
      </div>
    </div>
  );
};

export default SendEmail;
