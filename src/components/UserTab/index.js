import { Grid, Typography, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom'
import useStyles from './styles';

const UserTab = ({ user, posts, children }) => {
  const { cell, postTile } = useStyles();

  return (
    <Grid item xs>
      <Paper className={cell}>
        {!children && <Link to={`/user/${user.id}`}>
          <Typography variant="h5" component="h5" gutterBottom>
            {user.name}
          </Typography>
        </Link>}
        {children}
        {posts.map(post => <Typography key={post.id} variant="subtitle2" gutterBottom className={postTile}>
          - {post.title}
        </Typography>
        )}
      </Paper>
    </Grid>
  )
}

export default UserTab;