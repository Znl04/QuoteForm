import React from "react";
import "./OpenCardpage.css"; 

const generateCardNumber = () => {
  const prefix = "44004303"; // Карта начинается с этих цифр
  let randomNumbers = "";
  for (let i = 0; i < 8; i++) {
    randomNumbers += Math.floor(Math.random() * 10);
  }
  return `${prefix}${randomNumbers}`;
};

const generateCvv = () => {
  return Math.floor(100 + Math.random() * 900); // Генерация 3 случайных цифр для CVV
};

const getCardExpirationDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear() + 2; // Срок действия - 2 года
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Формат месяца с ведущим нулём
  return `${month}/${year}`;
};

const OpenCardPage = ({ fullName }) => {
  const cardNumber = generateCardNumber();
  const cvv = generateCvv();
  const expirationDate = getCardExpirationDate();

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <h2>Кредитная карта</h2>
        </div>
        <div className="card-body">
          <div className="card-number">{cardNumber}</div>
          <div className="card-details">
            <span className="card-expiration">Срок действия: {expirationDate}</span>
            <span className="card-cvv">CVV: {cvv}</span>
          </div>
        </div>
        <div className="card-footer">
          <span className="card-holder">{fullName}</span>
        </div>
      </div>
    </div>
  );
};

export default OpenCardPage;
