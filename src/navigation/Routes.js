import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home'
import User from 'pages/User'

const Router = () => {
  return (<BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/user" component={User} />
    </Switch>
  </BrowserRouter>)
}

export default Router;