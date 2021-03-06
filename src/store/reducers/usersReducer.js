const initialState = {
  items: [],
  loading: true,
  error: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESSUSERS':
      return {
        error: false,
        items: action.users,
        loading: false,
      }
    case 'FAILUREUSERS':
      return {
        ...state,
        loading: false,
        error: true
      }
    case 'CREATEUSERS':
      return {
        ...state,
        items: [...state.items, action.user]
      }
    default:
      return state;
  }
}

export default usersReducer;