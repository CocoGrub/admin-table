import React from 'react';
import { useDispatch } from 'react-redux';
import 'normalize.css';
import MainEditor from './pages/main-editor';
import { LOAD_USERS_AC } from './redux/actions/users';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log('app');
    dispatch(LOAD_USERS_AC());
  }, [LOAD_USERS_AC]);
  return (
    <div className="App">
      <MainEditor />
    </div>
  );
}

export default App;
