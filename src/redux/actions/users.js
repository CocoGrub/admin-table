import { ADD_USER, LOAD_USERS, EDIT_USER, DELETE_USER } from '../actions-types/user-types';

export const LOAD_USERS_AC = (users) => {
  return {
    type: LOAD_USERS,
    payload: users,
  };
};

export const ADD_USER_AC = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
export const EDIT_USER_AC = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};
export const DELETE_USER_AC = (user) => {
  return {
    type: DELETE_USER,
    payload: user,
  };
};
