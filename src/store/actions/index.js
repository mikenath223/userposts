export const fetchUsersSuccess = (users) => ({
  type: 'SUCCESSUSERS',
  users
})

export const addUser = (user) => ({
  type: 'CREATEUSERS',
  user
})

export const fetchUsersFailure = () => ({
  type: 'FAILUREUSERS',
})

export const fetchPostsSuccess = (posts) => ({
  type: 'SUCCESSPOSTS',
  posts
})

export const fetchPostsFailure = () => ({
  type: 'FAILUREPOSTS',
})
