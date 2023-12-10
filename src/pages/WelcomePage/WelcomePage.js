import { useState } from "react";
import mainImg from "../../assets/mainImg.jpg";
import GoBackModal from "../../components/Modal/GoBackModal";
import "./WelcomePage.css";

const WelcomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="welcome-container">
      <h2 className="welcome-title">Добро пожаловать!</h2>
      <p className="welcome-subtitle">Lorby - твой личный репетитор</p>
      <img src={mainImg} />
      <button onClick={handleShowModal} className="welcome-btn">
        Выйти
      </button>
      {showModal && <GoBackModal onCancel={handleCloseModal} />}
    </div>
  );
};

export default WelcomePage;
