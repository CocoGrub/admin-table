import { ADD_USER, LOAD_USERS } from '../actions-types/user-types';
const initialState = {};
function setID() {
  this.id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
}
function setDate() {
  this.time = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
}

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      const editDate = new setDate();
      if (state[payload.id]) {
        const newState = { ...state, [payload.id]: { ...payload, dateEdited: editDate.time } };
        localStorage.setItem('state', JSON.stringify(newState));
        return newState;
      }
      const uniqID = new setID();
      const crDate = new setDate();
      const newState = {
        ...state,
        [uniqID.id]: { ...payload, id: uniqID.id, dateCreated: crDate.time },
      };
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
