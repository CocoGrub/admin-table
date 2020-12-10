import { ADD_USER } from '../actions-types/user-types';
export const ADD_USER_AC = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
