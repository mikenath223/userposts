import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles';

const NavBar = () => {
  const { homeLink } = useStyles();

  return (<AppBar position="static">
    <Toolbar>
      <Typography variant="h6">
        <a href="/" className={homeLink}>
          Users-Posts
      </a>
      </Typography>
    </Toolbar>
  </AppBar>)
}

export default NavBar;