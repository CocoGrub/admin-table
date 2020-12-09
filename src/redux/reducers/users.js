const initialState = {
  0: {
    email: '',
    password: '',
    telephone: '',
    lastName: '',
    name: '',
    middleName: '',
    status: '',
    created: '',
    edited: '',
  },
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD-USER':
      return { ...state, sortBy: payload };
    case 'EDIT-USER':
      return { ...state, category: payload };
    default:
      return state;
  }
};
