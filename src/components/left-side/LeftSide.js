import React from 'react';

const LeftSide = () => {
  return (
    <div>
      <div className="left-side-wrapper">
        <form>
          <div className="letf-side-item">
            <label for="e-mail">e-mail</label>
            <input type="e-mail" id="e-mail" name="e-mail"></input>
          </div>
          <div className="letf-side-item">
            <label for="password">Пароль</label>
            <input type="password" id="password" name="password"></input>
          </div>
          <div className="letf-side-item">
            <label for="telefone">Телефон</label>
            <input type="number" id="telefone" name="telefone"></input>
          </div>
          <div className="letf-side-item">
            <label for="lastName">Фамилия</label>
            <input type="text" id="lastName" name="lastName"></input>
          </div>
          <div className="letf-side-item">
            <label for="name">Имя</label>
            <input type="text" id="name" name="name"></input>
          </div>
          <div className="letf-side-item">
            <label for="middleName">Отчество</label>
            <input type="text" id="middleName" name="middleName"></input>
          </div>
          <div>
            <label for="cars">Выберите статус</label>
            <br></br>
            <select name="status" id="status">
              <option value="client">Client</option>
              <option value="partner">Partner</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit"></button>
        </form>
      </div>
    </div>
  );
};

export default LeftSide;
