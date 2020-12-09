import React from 'react';
import LeftSide from '../../components/left-side/';
import RightSide from '../../components/right-side/';

const MainEditor = () => {
  return (
    <div className="main-edtor">
      <div>
        <LeftSide />
      </div>
      <div>
        <RightSide />
      </div>
    </div>
  );
};
export default MainEditor;
