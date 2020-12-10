import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Users = () => {
  const users = useSelector((state) => state);

  React.useEffect(() => {
    console.log(users);
  }, [users]);
  return Object.keys(users).map((user) => {
    const { id, email, dateCreated, lastName, middleName, name, phone, status } = users[user];
    return (
      <tr key={id}>
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
