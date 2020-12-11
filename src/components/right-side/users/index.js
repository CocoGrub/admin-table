import React from 'react';
import trash from '../../../assets/delete.png';
import edit from '../../../assets/edit.png';
import { useDispatch } from 'react-redux';
import { DELETE_USER_AC } from '../../../redux/actions/users';

const Users = ({ changeCurrentUser, users }) => {
  const dispatch = useDispatch();
  function confirmDelete(id) {
    if (window.confirm('are you sure?')) {
      dispatch(DELETE_USER_AC(id));
    }
  }
  return Object.keys(users).map((user) => {
    const { id, email, dateCreated, lastName, middleName, name, phone, status, dateEdited } = users[
      user
    ];
    return (
      <tr key={id}>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{lastName}</td>
        <td>{name}</td>
        <td>{middleName}</td>
        <td>{status}</td>
        <td>{dateCreated}</td>
        <td>{dateEdited}</td>
        <td onClick={() => changeCurrentUser(id)}>
          <img src={edit} style={{ width: '25px', cursor: 'pointer' }} alt="edit" />
        </td>
        <td onClick={() => confirmDelete(id)}>
          <img src={trash} style={{ width: '25px', cursor: 'pointer' }} alt="trash" />
        </td>
      </tr>
    );
  });
};
export default Users;
