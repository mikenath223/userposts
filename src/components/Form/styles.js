import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formSection: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: '50px',
    width: theme.spacing(100)
  },
  buttonWrap: {
    marginTop: '30px',
    alignSelf: 'center',
  }
}))

export default useStyles;