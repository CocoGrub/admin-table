import { createStore, compose } from 'redux';

import { usersReducer as users } from './reducers/users';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(users, composeEnhancers());

export default store;
