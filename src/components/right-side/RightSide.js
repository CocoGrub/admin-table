import React from 'react';

const RightSide = () => {
  return (
    <div>
      <div>
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
          </form>
        </div>
      </div>
    </div>
  );
};
export default RightSide;
