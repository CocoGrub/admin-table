import React from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_USER_AC } from '../../redux/actions/users';
import { Formik } from 'formik';
import { Schema } from './validation/schema';

const LeftSide = ({ currentUser, changeCurrentUser }) => {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="left-side-wrapper">
        <div className="info-buttons">
          <div
            className={classNames('info-button edit', {
              active: !currentUser,
            })}>
            <span>добавление</span>
          </div>
          <div
            className={classNames('info-button edit', {
              active: currentUser,
            })}>
            <span>редактирование</span>
          </div>
        </div>
        <div className="left-side-form-wrapper">
          <Formik
            enableReinitialize={true}
            initialValues={
              users[currentUser] || {
                email: '',
                password: '',
                phone: '',
                lastName: '',
                name: '',
                middleName: '',
                status: 'client',
                id: '',
              }
            }
            validationSchema={Schema}
            onSubmit={(values, { resetForm }) => {
              dispatch(ADD_USER_AC(values));
              changeCurrentUser('');
              resetForm();
            }}>
            {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <div className="letf-side-item">
                    <label htmlFor="email">Почта</label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <div className="error-indicator">{errors.email}</div>
                    )}
                  </div>
                  <div className="letf-side-item">
                    <label htmlFor="password">Пароль</label>
                    <input
                      type="password"
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                    />
                    {errors.password && touched.password && (
                      <div className="error-indicator">{errors.password}</div>
                    )}
                  </div>
                  <div className="letf-side-item">
                    <label htmlFor="phone">Телефон</label>
                    <input
                      type="phone"
                      name="phone"
                      value={values.phone}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.phone && touched.phone && (
                      <div className="error-indicator">{errors.phone}</div>
                    )}
                  </div>

                  <div className="letf-side-item">
                    <label htmlFor="lastName">Фамилия</label>
                    <input
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.lastName && touched.lastName && (
                      <div className="error-indicator">{errors.lastName}</div>
                    )}
                  </div>

                  <div className="letf-side-item">
                    <label htmlFor="name">Имя</label>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.name && touched.name && (
                      <div className="error-indicator">{errors.name}</div>
                    )}
                  </div>

                  <div className="letf-side-item">
                    <label htmlFor="middleName">Отчество</label>
                    <input
                      type="text"
                      name="middleName"
                      value={values.middleName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.middleName && touched.middleName && (
                      <div className="error-indicator">{errors.middleName}</div>
                    )}
                  </div>
                  <div className="letf-side-item">
                    <label htmlFor="status">Выберите статус</label>
                    <select
                      name="status"
                      id="status"
                      value={values.status}
                      onBlur={handleBlur}
                      onChange={handleChange}>
                      <option value="client">Client</option>
                      <option value="partner">Partner</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  <div className="submit-button-wrapper">
                    <button className="submit-button" type="submit">
                      {currentUser ? 'Изменить' : 'Добавить'}
                    </button>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
