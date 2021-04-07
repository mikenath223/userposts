import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Router = () => {
  return (<BrowserRouter>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/user">
        <User />
      </Route>
    </Switch>
  </BrowserRouter>)
}

export default Router;