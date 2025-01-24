import './QueryFormPage.css'

export default function QueryFormPage() {
  return (
    <>
      <div className="quote-form-container">
        <h1 className="quote-form-header">
          Форма для обращения
        </h1>

        <form action="#" className="quote-form">
          <label htmlFor="full-name">ФИО *</label>
          <input type="text" id="full-name" name="full-name" placeholder="Введите ваше полное имя" required/>

          <label htmlFor="dob">Дата рождения *</label>
          <input type="date" id="dob" name="dob" required></input>

          <label htmlFor="iin">ИИН *</label>
          <input type="text" id="iin" name="iin" placeholder="Введите ваш ИИН" required/>

          <label htmlFor="phone">Номер телефона *</label>
          <input type="tel" id="phone" name="phone" placeholder="Введите ваш номер телефона" required/>

          <label htmlFor="document-type">Тип документа *</label>
          <select id="document-type" name="document-type" required>
              <option value="">Выберите тип документа</option>
              <option value="passport">Паспорт</option>
              <option value="id-card">Удостоверение личности</option>
          </select>

          <label htmlFor="document-number">Серия и номер документа *</label>
          <input type="text" id="document-number" name="document-number" placeholder="Введите серию и номер" required/>

          <label htmlFor="issued-by">Кем выдан документ *</label>
          <input type="text" id="issued-by" name="issued-by" placeholder="Введите название органа, выдавшего документ" required/>

          <label htmlFor="issue-date">Дата выдачи *</label>
          <input type="date" id="issue-date" name="issue-date" required/>

          <label for="service">Цель обращения *</label>
          <select id="service" name="service" required>
              <option value="">Выберите цель обращения</option>
              <option value="account">Открытие счета</option>
              <option value="credit">Кредит</option>
              <option value="card">Банковская карта</option>
          </select>


          <label>
              <input type="checkbox" name="consent" required/>
              Я даю согласие на обработку персональных данных
          </label>

          <button type="submit">Отправить</button>
          <button type="reset">Очистить</button>
        </form>

        <div class="form-footer">
            <p>Нажимая «Отправить», вы соглашаетесь с нашей <a href="#">Политикой конфиденциальности</a>.</p>
        </div>
      </div>
    </>
  );
}