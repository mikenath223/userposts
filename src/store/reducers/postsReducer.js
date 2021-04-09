const initialState = {
  items: [],
  loading: true,
  error: false
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESSPOSTS':
      return {
        error: false,
        items: action.posts,
        loading: false,
      }
    case 'FAILUREPOSTS':
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state;
  }
}

export default postsReducer;