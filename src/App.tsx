import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Login from './containers/Login/Login';

class App extends React.Component<{}, {}> {
  
  public render() {

    const routes = (
      <Switch>
        <Route path="/auth" component={Login} />
        <Redirect to="/auth" />
      </Switch>
    );

    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default App;
