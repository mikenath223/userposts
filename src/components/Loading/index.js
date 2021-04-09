import { CircularProgress } from '@material-ui/core';
import useStyles from './styles';

const Loading = () => {
  const { loading } = useStyles();

  return (<section className={loading}>
    <CircularProgress color="secondary" />
  </section>)
}

export default Loading;