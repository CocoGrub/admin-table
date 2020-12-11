import React from 'react';
import { useDispatch } from 'react-redux';

import MainEditor from './pages/main-editor';
import { LOAD_USERS_AC } from './redux/actions/users';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(LOAD_USERS_AC());
  }, [dispatch]);
  return (
    <div className="App">
      <MainEditor />
    </div>
  );
}

export default App;
