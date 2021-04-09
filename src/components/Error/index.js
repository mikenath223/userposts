import { Typography, Button } from '@material-ui/core';
import useStyles from './styles'

const Error = ({ message }) => {
  const { errWrap } = useStyles();

  return (<section className={errWrap}>
    <Typography variant="h5" component="h5" gutterBottom>
      {message}
    </Typography>
    <Button variant="contained" color="secondary" href="/">
      Go Home
    </Button>
  </section>
  )
}

export default Error;