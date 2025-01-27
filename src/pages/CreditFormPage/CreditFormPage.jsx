import './CreditFormPage.css'
import React from "react";
import { useForm } from "react-hook-form";

const CreditFormPage = ({ user }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Отправляемые данные:", { ...data, userId: user.id });
    // Отправка данных на сервер
    fetch("/api/credit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, userId: user.id }),
    })
      .then((res) => res.json())
      .then((response) => console.log("Ответ от сервера:", response))
      .catch((error) => console.error("Ошибка:", error));
  };

  return (
    <div className="credit-form-container">
      <h2>Форма кредитования</h2>
      <form className="credit-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>ФИО:</label>
          <p>{user.fullName}</p>
        </div>
        <div>
          <label>ИИН:</label>
          <p>{user.iin}</p>
        </div>
        <div>
          <label>Сумма кредита:</label>
          <input
            type="number"
            {...register("creditAmount", { required: true, min: 50000, max: 10000000 })}
          />
          {errors.creditAmount && <span>Введите сумму от 50,000 до 10,000,000</span>}
        </div>
        <div>
          <label>Зарплата:</label>
          <input
            type="number"
            {...register("salary", { required: true, min: 10000 })}
          />
          {errors.salary && <span>Введите корректную зарплату</span>}
        </div>
        <div>
          <label>Цель кредита:</label>
          <input
            type="text"
            {...register("creditPurpose", { required: true })}
          />
          {errors.creditPurpose && <span>Введите цель кредита</span>}
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default CreditFormPage;
