import React from "react";
import "./Modal.css";

const SendSecondEmailModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p className="modal-title">
          Мы выслали еще одно письмо на указанную тобой почту example@gmail.com
        </p>
        <p className="modal-subtitle">Не забудь проверить ящик “Спам”!11!!!!</p>
        <button onClick={onClose} className="modal-btn">
          Понятно!!1!
        </button>
      </div>
    </div>
  );
};

export default SendSecondEmailModal;
