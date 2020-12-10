import React from 'react';
import LeftSide from '../../components/left-side/';
import RightSide from '../../components/right-side/';

const MainEditor = () => {
  const [currentUser, setCurrentUser] = React.useState('');
  function changeCurrentUser(id) {
    setCurrentUser(id);
    console.log(currentUser);
  }
  return (
    <div className="main-edtor">
      <div>
        <LeftSide currentUser={currentUser} changeCurrentUser={changeCurrentUser} />
      </div>
      <div>
        <RightSide changeCurrentUser={changeCurrentUser} />
      </div>
    </div>
  );
};
export default MainEditor;
