import * as Yup from 'yup';
export const Schema = Yup.object().shape({
  password: Yup.string()
    .min(4, 'слишком короткий')
    .max(12, 'слишком длинный')
    .required('заполните поле'),
  name: Yup.string()
    .min(2, 'слишком короткое')
    .max(10, 'слишком длинное')
    .required('заполните поле'),
  lastName: Yup.string()
    .min(2, 'слишком короткая')
    .max(10, 'слишком длинная')
    .required('заполните поле'),
  middleName: Yup.string()
    .min(2, 'слишком короткое')
    .max(10, 'слишком длинное')
    .required('заполните поле'),
  email: Yup.string().email('некорректный e-mail').required('заполните поле'),
  phone: Yup.string()
    .matches(new RegExp('[0-9]{7}'), {
      message: 'некорректный номер',
      excludeEmptyString: false,
    })
    .required('заполните поле'),
});
