// import { Navigation } from 'components';
import asyncComponent from 'components/HOC/AsyncComponent';
import { INavigationItem } from 'components/Navigation';
import * as React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from 'react-router-dom';
import { authAutoSignIn } from 'store/actions';
import * as classes from './App.scss';
const AsyncAdmin = asyncComponent(() => import('containers/Admin/Admin'));
const AsyncAuth = asyncComponent(() => import('containers/Auth/Auth'));
const AsyncCategories = asyncComponent(() =>
  import('containers/Categories/Categories')
);
const AsyncDashboard = asyncComponent(() =>
  import('containers/Dashboard/Dashboard')
);
const AsyncExpenses = asyncComponent(() =>
  import('containers/Expenses/Expenses')
);
const AsyncStatements = asyncComponent(() =>
  import('containers/Statements/Statements')
);

interface IProps {
  autoSignIn: () => void;
  isAuthenticated: boolean;
}
class App extends React.Component<IProps & RouteComponentProps<{}>, {}> {
  public items: INavigationItem[] = [
    {
      href: '/expenses',
      label: 'Expenses',
    },
    {
      href: '/categories',
      label: 'Categories',
    },
    {
      href: '/statements',
      label: 'Statements',
    },
    {
      href: '/admin',
      label: 'Administration',
    },
  ];
  public componentDidMount() {
    this.props.autoSignIn();
  }

  public render() {
    return (
      <div>
        <Switch>
          <Route exact={true} path="/auth" component={AsyncAuth} />
          <React.Fragment>
            {/* <Navigation items={this.items} default='/dashboard' /> */}
            <nav role="navigation" className={classes.Navbar} />
            <div className={classes.Container}>
              <div className={classes.PaperWrap}>
                <Route path="/dashboard" component={AsyncDashboard} />
                <Route path="/expenses" component={AsyncExpenses} />
                <Route path="/categories" component={AsyncCategories} />
                <Route path="/statements" component={AsyncStatements} />
                <Route path="/admin" component={AsyncAdmin} />
              </div>
            </div>
          </React.Fragment>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.idToken !== null,
});

const mapDispatchToProps = (dispatch: any) => ({
  autoSignIn: () => dispatch(authAutoSignIn()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
