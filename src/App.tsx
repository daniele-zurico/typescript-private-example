import { Navigation } from 'components';
import asyncComponent from 'components/HOC/AsyncComponent';
import { INavigationItem } from 'components/Navigation';
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
  public items: INavigationItem[] = [
    {
      href: '/expenses',
      label: 'Expenses'
    },
    {
      href: '/categories',
      label: 'Categories'
    },
    {
      href: '/statements',
      label: 'Statements'
    }
  ]
  public componentDidMount() {
    this.props.autoSignIn();
  }

  public render() {
    return (
      <div>

        <Switch>
          <Route path="/auth" component={AsyncAuth} />
          <React.Fragment>
            <Navigation items={this.items} />
            <Route path="/dashboard" component={AsyncDashboard} />
          </React.Fragment>
          <Redirect to="/auth" />
        </Switch>
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
