import React from 'react';

const RightSide = () => {
  return (
    <div className="right-side-wrapper">
      <div>
        <div className="search-panel">
          <div className="search-panel-span">
            <span>Фильтрация</span>
          </div>
          <div className="search-panel-item">
            <input type="e-mail" placeholder="telephone" id="e-mail" name="e-mail"></input>
          </div>
          <div className="search-panel-item">
            <input type="password" placeholder="password" id="password" name="password"></input>
          </div>
          <div className="search-panel-item">
            <input type="number" placeholder="number" id="telefone" name="telefone"></input>
          </div>
        </div>
        <div className="table"></div>
      </div>
    </div>
  );
};
export default RightSide;
