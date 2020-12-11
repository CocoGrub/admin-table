import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_USER_AC, EDIT_USER_AC } from '../../redux/actions/users';

const LeftSide = ({ currentUser, changeCurrentUser }) => {
  const users = useSelector((state) => state);

  const dispatch = useDispatch();
  // const users = useSelector((state) => state);
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    phone: '',
    lastName: '',
    name: '',
    middleName: '',
    status: 'client',
    id: '',
  });
  React.useEffect(() => {
    if (currentUser) {
      setFormData(users[currentUser]);
    }
  }, [currentUser]);

  const { email, password, phone, lastName, name, middleName, status } = formData;
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(ADD_USER_AC(formData));
    changeCurrentUser('');
    setFormData({
      email: '',
      password: '',
      phone: '',
      lastName: '',
      name: '',
      middleName: '',
      status: 'client',
      id: '',
    });
  };
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
          <form onSubmit={formSubmit}>
            <div className="letf-side-item">
              <label htmlFor="email">email</label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}></input>
            </div>
            <div className="letf-side-item">
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}></input>
            </div>
            <div className="letf-side-item">
              <label htmlFor="phone">Телефон</label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={phone}
                onChange={onChange}></input>
            </div>
            <div className="letf-side-item">
              <label htmlFor="lastName">Фамилия</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={onChange}></input>
            </div>
            <div className="letf-side-item">
              <label htmlFor="name">Имя</label>
              <input type="text" id="name" name="name" value={name} onChange={onChange}></input>
            </div>
            <div className="letf-side-item">
              <label htmlFor="middleName">Отчество</label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                value={middleName}
                onChange={onChange}></input>
            </div>
            <div>
              <label htmlFor="status">Выберите статус</label>
              <br></br>
              <select name="status" id="status" value={status} onChange={onChange}>
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
