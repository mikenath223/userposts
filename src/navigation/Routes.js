import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home'
import User from 'pages/User'
import Error from 'components/Error'

const Router = () => {
  return (<BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/user/:userId" component={User} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>)
}

export default Router;