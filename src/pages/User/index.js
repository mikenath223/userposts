import { useParams } from 'react-router-dom';
import { comparator } from 'pages/Home';
import { useSelector } from 'react-redux';
import UserTab from 'components/UserTab';
import { Typography, Paper } from '@material-ui/core';
import Error from 'components/Error';
import useStyles from './styles';

const User = () => {
  const { userId } = useParams();
  const usersData = useSelector(state => state.usersData.items)
  const postsData = useSelector(state => state.postsData.items)
  const { userWrap } = useStyles();

  const user = usersData.find(u => u.id === +userId)

  if (!user) {
    return <Error message="There was an error in retrieving user data" />
  }

  const { name, id, username, email, phone, website, address, company } = user;
  const userPosts = postsData.filter(p => p.userId === userId).sort(comparator('title'))

  return (
    <section className={userWrap}>
      <UserTab posts={userPosts} user={{ name, id }}>
        <>
          <Typography variant="h5" component="h5" gutterBottom>
            {name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            User Id: {id}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Username: {username}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Email: {email}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Phone: {phone}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Website: {website}
          </Typography>
          <Paper square>
            <Typography variant="h6" component="h6">
              Address
          </Typography>
            <Typography variant="subtitle1" gutterBottom>
              City: {address.city}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Street: {address.street}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Suite: {address.suite}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Zipcode: {address.zipcode}
            </Typography>
          </Paper>
          <Paper square>
            <Typography variant="h6" component="h6">
              Company
          </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Name: {company.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Catch Phrase: {company.catchPhrase}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Company BS: {company.bs}
            </Typography>
          </Paper>
        </>
      </UserTab>
    </section>
  )
}

export default User;