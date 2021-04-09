import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUsersSuccess, fetchPostsSuccess,
  fetchUsersFailure
} from 'store/actions'
import UserTab from 'components/UserTab';
import Error from 'components/Error';
import Loading from 'components/Loading';
import Form from 'components/Form';
import { Grid, Button } from '@material-ui/core';
import useStyles from './styles';
import { getData } from 'utils/request'

export const comparator = (type) => (a, b) => {
  const typeA = a[type].toUpperCase();
  const typeB = b[type].toUpperCase();
  if (typeA < typeB) {
    return -1;
  }
  if (typeA > typeB) {
    return 1;
  }
  return 0;
};

const Home = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { items: usersData, error, loading: usersLoading } = useSelector(state => state.usersData)
  const { items: postsData, loading: postsLoading } = useSelector(state => state.postsData)
  const { grid, homeWrap } = useStyles()

  const fetchUsersPosts = useCallback(async (abortController) => {
    const userItems = await getData('users', abortController);
    const postItems = await getData('posts', abortController);
    if (!userItems || !postItems) {
      return dispatch(fetchUsersFailure())
    }
    dispatch(fetchPostsSuccess(postItems))
    dispatch(fetchUsersSuccess(userItems))
  }, [dispatch])

  useEffect(() => {
    const abortController = new AbortController();
    fetchUsersPosts(abortController)
    return () => {
      abortController.abort()
    }
  }, [fetchUsersPosts])

  const sortData = () => {
    const sortedUsers = usersData.sort(comparator('name'));
    const sortedPosts = postsData.sort(comparator('title'));
    const groupedPosts = sortedPosts.reduce((acc, curr) => {
      if (!acc[curr?.userId]) {
        acc[curr.userId] = []
      } else {
        acc[curr.userId].push(curr)
      }
      return acc
    }, {})
    console.log({ sortedUsers, sortedPosts, groupedPosts });
    return (sortedUsers.map(user => <UserTab key={user.id} user={user} posts={groupedPosts[user.id] || []} />))
  }

  if (error) {
    return <Error message="There was an error in retrieving data" />
  }

  if (usersLoading || postsLoading) {
    return <Loading />
  }

  return (
    <section className={homeWrap}>
      <Button variant="contained" onClick={() => setOpen(true)} color="secondary">
        Add User
      </Button>
      <div className={grid}>
        <Grid container spacing={2}>
          {sortData()}
        </Grid>
      </div>
      <Form open={open} handleClose={() => setOpen(false)} />
    </section>
  )
}

export default Home;