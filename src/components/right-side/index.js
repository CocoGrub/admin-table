import React from 'react';
import Users from './users/index';
import { useSelector } from 'react-redux';

const RightSide = ({ changeCurrentUser }) => {
  const users = useSelector((state) => state);
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
            <input type="email" placeholder="email" id="email" name="email"></input>
          </div>
          <div className="search-panel-item">
            <input type="status" placeholder="status" id="status" name="status"></input>
          </div>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th className="">email</th>
                <th className="">Телефон</th>
                <th className="">Фамилия</th>
                <th className="">Имя</th>
                <th className="">Отчество</th>
                <th className="">Статус</th>
                <th className="">Дата создания</th>
                <th className="">Дата редактирования</th>
              </tr>
            </thead>
            <tbody>{<Users users={users} changeCurrentUser={changeCurrentUser} />}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default RightSide;
