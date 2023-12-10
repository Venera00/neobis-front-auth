import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";

const GoBackModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p className="modal-title">Выйти?</p>
        <p className="modal-subtitle">Точно выйти?</p>
        <Link to="/">
          <button onClick={onConfirm} className="modal-btn">
            Да, точно
          </button>
        </Link>
        <button onClick={onCancel} className="modal-btn modal-btn_white">
          Нет, остаться
        </button>
      </div>
    </div>
  );
};

export default GoBackModal;
