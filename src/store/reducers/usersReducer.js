const initialState = {
  items: {},
  loading: true,
  error: null
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        items: action.usersPosts,
        loading: false,
      }
    case 'FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state;
  }
}