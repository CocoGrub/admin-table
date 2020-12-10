import React, { useEffect } from 'react';

const Users = ({ changeCurrentUser, users }) => {
  return Object.keys(users).map((user) => {
    const { id, email, dateCreated, lastName, middleName, name, phone, status } = users[user];
    return (
      <tr key={id} onClick={() => changeCurrentUser(id)}>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{lastName}</td>
        <td>{name}</td>
        <td>{middleName}</td>
        <td>{status}</td>
        <td>{dateCreated}</td>
        {/* <td>{status}</td> */}
      </tr>
    );
  });
};
export default Users;
