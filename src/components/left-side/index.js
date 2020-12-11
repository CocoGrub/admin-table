import React from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_USER_AC } from '../../redux/actions/users';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Schema = Yup.object().shape({
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(12, 'Too Long!')
    .required('This field is required'),
  name: Yup.string().min(2, 'Too Short!').max(10, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(10, 'Too Long!').required('Required'),
  middleName: Yup.string().min(2, 'Too Short!').max(10, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().matches(new RegExp('[0-9]{7}'), {
    message: 'Please enter valid number.',
    excludeEmptyString: false,
  }),
});

const LeftSide = ({ currentUser, changeCurrentUser }) => {
  const users = useSelector((state) => state);
  console.log('currentUser', users[currentUser]);
  const dispatch = useDispatch();
  // const [formData, setFormData] = React.useState({
  //   email: '',
  //   password: '',
  //   phone: '',
  //   lastName: '',
  //   name: '',
  //   middleName: '',
  //   status: 'client',
  //   id: '',
  // });
  // React.useEffect(() => {
  //   if (currentUser) {
  //     setFormData();
  //   }
  // }, [currentUser]);

  // const { email, password, phone, lastName, name, middleName, status } = formData;
  // const onChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const formSubmit = (e) => {
  //   // e.preventDefault();
  //   dispatch(ADD_USER_AC(formData));
  //   changeCurrentUser('');
  //   setFormData({
  //     email: '',
  //     password: '',
  //     phone: '',
  //     lastName: '',
  //     name: '',
  //     middleName: '',
  //     status: 'client',
  //     id: '',
  //   });
  // };
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
            {({ reserForm, values, errors, touched, handleSubmit, handleChange, handleBlur }) => {
              console.log(errors);
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
                    {errors.email && touched.email && <div>{errors.email}</div>}
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
                    {errors.password && touched.password && <div>{errors.password}</div>}
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
                    {errors.phone && touched.phone && <div>{errors.phone}</div>}
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
                    {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}
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
                    {errors.name && touched.name && <div>{errors.name}</div>}
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
                    {errors.middleName && touched.middleName && <div>{errors.middleName}</div>}
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
                  <button type="submit">Submit</button>
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

// <div className="letf-side-item">
// <label htmlFor="email">email</label>
// <Field type="email" name="email" value={email} onChange={onChange} />
// <ErrorMessage name="email" component="div" />
// </div>
// <div className="letf-side-item">
// <label htmlFor="password">Пароль</label>
// <Field type="password" name="password" value={password} onChange={onChange} />
// <ErrorMessage name="password" component="div" />
// </div>

// <div className="letf-side-item">
// <label htmlFor="lastName">Фамилия</label>
// <Field type="lastName" name="lastName" value={lastName} onChange={onChange} />
// </div>

// <div className="letf-side-item">
// <label htmlFor="name">Имя</label>
// <Field type="name" name="name" value={name} onChange={onChange} />
// </div>

// <div className="letf-side-item">
// <label htmlFor="middleName">Отчество</label>
// <Field
//   type="middleName"
//   name="middleName"
//   value={middleName}
//   onChange={onChange}
// />
// </div>

// </div>
// <div className="submit-button-wrapper">
// <button disabled={isSubmitting} className="submit-button" type="submit">
//   {currentUser ? 'Изменить' : 'Добавить'}
// </button>
// </div>
