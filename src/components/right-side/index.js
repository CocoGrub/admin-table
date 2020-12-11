import React from 'react';
import Users from './users/index';
import { useSelector } from 'react-redux';

const RightSide = ({ changeCurrentUser }) => {
  const users = useSelector((state) => state);
  const [seachTypes, setSeachTypes] = React.useState({
    phone: '',
    email: '',
    status: '',
  });
  const [newUsers, setNewUsers] = React.useState('');

  React.useEffect(() => {
    setNewUsers(users);
  }, [users]);
  const { phone, email, status } = { seachTypes };

  React.useEffect(() => {
    setNewUsers(
      Object.keys(users)
        .filter(
          (x) =>
            users[x].phone.includes(seachTypes.phone) &&
            users[x].email.includes(seachTypes.email) &&
            users[x].status.includes(seachTypes.status),
        )
        .reduce((obj, key) => ({ ...obj, [key]: users[key] }), {}),
    );
  }, [seachTypes, users]);

  const filterThis = (e) => {
    setSeachTypes({
      ...seachTypes,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="right-side-wrapper">
      <div>
        <div className="search-panel">
          <div className="search-panel-span">
            <span>Фильтрация</span>
          </div>
          <div className="search-panel-item">
            <input
              value={phone}
              type="phone"
              placeholder="phone"
              id="phone"
              name="phone"
              onChange={filterThis}></input>
          </div>
          <div className="search-panel-item">
            <input
              value={email}
              type="email"
              placeholder="email"
              id="email"
              name="email"
              onChange={filterThis}></input>
          </div>
          <div className="search-panel-item">
            <label htmlFor="status">статус</label>
            <select name="status" id="status" value={status} onChange={filterThis}>
              <option value="">All</option>
              <option value="client">Client</option>
              <option value="partner">Partner</option>
              <option value="admin">Admin</option>
            </select>
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
                <th className="">Дата изменения</th>
                <th className="">Изменить</th>
                <th className="">Удалить</th>
              </tr>
            </thead>
            <tbody>{<Users users={newUsers} changeCurrentUser={changeCurrentUser} />}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default RightSide;
