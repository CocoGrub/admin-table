import { ADD_USER, LOAD_USERS, DELETE_USER } from '../actions-types/user-types';
const initialState = {};
function setID() {
  this.id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
}
function setDate() {
  function dateComponentPad(value) {
    var format = String(value);
    return format.length < 2 ? '0' + format : format;
  }
  function formatDate(date) {
    var datePart = [date.getFullYear(), date.getMonth() + 1, date.getDate()].map(dateComponentPad);
    var timePart = [date.getHours(), date.getMinutes(), date.getSeconds()].map(dateComponentPad);
    return datePart.join('-') + ' ' + timePart.join(':');
  }
  this.time = formatDate(new Date());
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
    case DELETE_USER:
      const { [payload]: remove, ...rest } = state; //imutable remove property from the state
      localStorage.setItem('state', JSON.stringify(rest));
      return rest;
    default:
      return state;
  }
};
