import asyncComponent from 'components/HOC/AsyncComponent';
import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';

const asyncLogin = asyncComponent(() => import('containers/Login/Auth'));
class App extends React.Component<{}, {}> {
  public render() {
    const routes = (
      <Switch>
        <Route path="/auth" component={asyncLogin} />
        <Redirect to="/auth" />
      </Switch>
    );

    return <div>{routes}</div>;
  }
}

export default App;
