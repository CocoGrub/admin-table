import React from 'react';

const LeftSide = () => {
  return (
    <div>
      <div className="left-side-wrapper">
        <div className="info-buttons">
          <div className="info-button add">
            <span>добавление</span>
          </div>
          <div className="info-button edit">
            <span>редактирование</span>
          </div>
        </div>
        <div className="left-side-form-wrapper">
          <form>
            <div className="letf-side-item">
              <label htmlFor="e-mail">e-mail</label>
              <input type="e-mail" id="e-mail" name="e-mail"></input>
            </div>
            <div className="letf-side-item">
              <label htmlFor="password">Пароль</label>
              <input type="password" id="password" name="password"></input>
            </div>
            <div className="letf-side-item">
              <label htmlFor="telefone">Телефон</label>
              <input type="number" id="telefone" name="telefone"></input>
            </div>
            <div className="letf-side-item">
              <label htmlFor="lastName">Фамилия</label>
              <input type="text" id="lastName" name="lastName"></input>
            </div>
            <div className="letf-side-item">
              <label htmlFor="name">Имя</label>
              <input type="text" id="name" name="name"></input>
            </div>
            <div className="letf-side-item">
              <label htmlFor="middleName">Отчество</label>
              <input type="text" id="middleName" name="middleName"></input>
            </div>
            <div>
              <label htmlFor="status">Выберите статус</label>
              <br></br>
              <select name="status" id="status">
                <option value="client">Client</option>
                <option value="partner">Partner</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="submit-button-wrapper">
              <button className="submit-button" type="submit">
                Добавить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
