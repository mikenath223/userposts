import { useState } from 'react';
import { Modal, Fade, Backdrop, TextField, Grid, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { addUser } from 'store/actions'

const Form = ({ open, handleClose }) => {
  const [form, setForm] = useState({})
  const dispatch = useDispatch()
  const { modal, formSection, buttonWrap } = useStyles();

  const validation = () => {
    return !form.phone || !form.email || !form.name ||
    !form.username || !form.website ||
    !form?.address?.city || !form?.address?.street || !form?.address?.suite || 
    !form?.address?.zipcode || !form?.company?.name || !form?.company?.bs ||
    !form?.company?.catchPhrase
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addUser({...form, id: Math.floor(Math.random() * 10)}))
    setForm({})
    handleClose()
  }

  const handleChange = ({ target: { id, value, name } }) => {
    switch (name) {
      case 'address':
      case 'company':
        setForm({
          ...form,
          [name]: {
            ...form[name],
            [id]: value
          }
        })
        break;
      default:
        setForm({ ...form, [id]: value })
        break;
    }
  }

  return (
    <Modal
      aria-labelledby="create-user-form"
      aria-describedby="to create a user in state"
      className={modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <form className={formSection} onSubmit={handleSubmit}>
          <Typography variant="h5" component="h5" gutterBottom color="primary">
            Create User
        </Typography>
          <Grid container spacing={2}>
            <Grid item xs>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                value={form.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs>
              <TextField
                id="username"
                label="UserName"
                variant="outlined"
                value={form.username}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs>
              <TextField
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                value={form.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs>
              <TextField
                id="phone"
                label="Phone"
                type="number"
                variant="outlined"
                value={form.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs>
              <TextField
                id="website"
                label="Website"
                variant="outlined"
                value={form.website}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <div>
            <Typography variant="h6" component="h6" gutterBottom color="secondary">
              Address
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs>
                <TextField
                  id="city"
                  label="City"
                  name="address"
                  variant="outlined"
                  value={form?.address?.city}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="street"
                  label="Street"
                  name="address"
                  variant="outlined"
                  value={form?.address?.street}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="suite"
                  label="Suite"
                  type="suite"
                  name="address"
                  variant="outlined"
                  value={form?.address?.suite}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="zipcode"
                  label="Zipcode"
                  variant="outlined"
                  name="address"
                  value={form?.address?.zipcode}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </div>
          <div>
            <Typography variant="h6" component="h6" gutterBottom color="secondary">
              Company
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs>
                <TextField
                  id="name"
                  label="Name"
                  name="company"
                  variant="outlined"
                  value={form?.company?.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="bs"
                  label="BS"
                  name="company"
                  variant="outlined"
                  value={form?.company?.bs}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="catchPhrase"
                  label="Catch Phrase"
                  name="company"
                  variant="outlined"
                  value={form?.company?.catchPhrase}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </div>
          <div className={buttonWrap}>
            <Button disabled={validation()} variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Fade>
    </Modal>
  )
}

export default Form;