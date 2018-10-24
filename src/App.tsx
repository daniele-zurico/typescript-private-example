// import { Navigation } from 'components';
import asyncComponent from 'components/HOC/AsyncComponent';
import { INavigationItem } from 'components/Navigation/Navigation1';
import * as React from 'react';
import { connect } from 'react-redux';
import {
  Link,
  Route,
  RouteComponentProps,
  RouteProps,
  Switch,
  withRouter,
} from 'react-router-dom';
import { authAutoSignIn } from 'store/actions';
import * as classes from './App.scss';
import { TopNavigation } from './components';
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
  location?: RouteProps;
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

  public onLogout = () => {
    console.log('logout');
  };

  public render() {
    // this stuff need to be in his own component.... I'm just designing for now to position correctly
    const menu = (
      <div className={classes.LeftBarContainer}>
        <div className={classes.Logo}>
          <img src={require('./styles/assets/logo.png')} width={'100px'} />
        </div>
        <div className={classes.Toggle}>
          <span className={classes.Menu} />
        </div>
        <div className={classes.SideNav}>
          <ul className={[classes.TopNav, classes.MenuLeftNest].join(' ')}>
            <li>
              <Link to="/dashboard">
                <i className={'material-icons'}>home</i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/expenses">
                <i className={'material-icons'}>receipt</i>
                <span>Expenses</span>
              </Link>
            </li>
            <li>
              <Link to="/incomes">
                <i className={'material-icons'}>attach_money</i>
                <span>Incomes</span>
              </Link>
            </li>
            <li>
              <Link to="/categories">
                <i className={'material-icons'}>category</i>
                <span>Categories</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );

    return (
      <div>
        <Switch>
          <Route exact={true} path="/auth" component={AsyncAuth} />
          <React.Fragment>
            <TopNavigation
              displayUser="Daniele Zurico"
              logoutHandler={this.onLogout}
            />
            {menu}
            <div className={classes.Container}>
              <div className={classes.PaperWrap}>
                <div className={classes.PaperTop}>
                  <h2 className={classes.Title}>
                    <i className={'material-icons'}>receipt</i>
                    <span>{this.props.location.pathname.substring(1)}</span>
                  </h2>
                  <div className={classes.Divider} />
                </div>
                <Route path="/dashboard" component={AsyncDashboard} />
                <Route path="/expenses" component={AsyncExpenses} />
                <Route path="/categories" component={AsyncCategories} />
                <Route path="/statements" component={AsyncStatements} />
                <Route path="/incomes" component={AsyncAdmin} />
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
