export const fetchUserPostsSuccess = (usersPosts) => ({
  type: 'SUCCESS',
  usersPosts
})

export const fetchUserPostsFailure = (error) => ({
  type: 'FAILURE',
  error
})