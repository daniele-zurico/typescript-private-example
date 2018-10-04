import asyncComponent from 'components/HOC/AsyncComponent';
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { authAutoSignIn } from 'store/actions';
const AsyncAuth = asyncComponent(() => import('containers/Auth/Auth'));
const AsyncDashboard = asyncComponent(() => import('containers/Dashboard/Dashboard'));
interface IProps {
  autoSignIn: () => void;
  isAuthenticated: boolean;
}
class App extends React.Component<IProps, {}> {

  public componentDidMount() {
    this.props.autoSignIn();
  }

  public render() {
    let routes;
    if (!this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/auth" component={AsyncAuth} />
          <Redirect to="/auth" />
        </Switch>
      );
    }
    else {
      routes = (<Switch>
        <Route path="/auth" component={AsyncAuth} />
        <Route path="/dashboard" component={AsyncDashboard} />
        <Redirect to="/auth" />
      </Switch>);
    }
    return (
      <div>
        {routes}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.idToken !== null
});

const mapDispatchToProps = (dispatch: any) => ({
  autoSignIn: () => dispatch(authAutoSignIn())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
