import { ADD_USER, LOAD_USERS } from '../actions-types/user-types';
const initialState = {};
function setID() {
  this.id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
}
function dateCreated() {
  this.time = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
}

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      const uniqID = new setID();
      const crDate = new dateCreated();
      const newState = {
        ...state,
        [uniqID.id]: { ...payload, id: uniqID.id, dateCreated: crDate.time },
      };
      // localStorage.setItem([uniqID.id], JSON.stringify(newState[uniqID.id]));
      localStorage.setItem('state', JSON.stringify(newState));
      return newState;
    case LOAD_USERS: {
      const localStorageData = localStorage.getItem('state');

      return { ...JSON.parse(localStorageData) };
    }
    case 'EDIT-USER':
      return { ...state };
    default:
      return state;
  }
};
