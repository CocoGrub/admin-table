import { ADD_USER } from '../actions-types/user-types';
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
      return { ...state, [uniqID.id]: { ...payload, id: uniqID.id, dateCreated: crDate.time } };
    case 'EDIT-USER':
      return { ...state };
    default:
      return state;
  }
};
