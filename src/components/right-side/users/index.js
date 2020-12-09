import React from 'react';
const Users = currentPosts.map((profile) => {
  return (
    <tr key={profile.id + profile.phone}>
      <td>{profile.id}</td>
      <td>{profile.firstName}</td>
      <td>{profile.lastName}</td>
      <td>{profile.email}</td>
      <td>{profile.phone}</td>
    </tr>
  );
});

export default Users;
