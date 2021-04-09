import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cell: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  postTile: {
    width: '300px'
  }
}))

export default useStyles;