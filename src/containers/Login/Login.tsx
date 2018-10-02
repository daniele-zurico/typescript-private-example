import { IError } from 'common/interfaces';
import { FormElements } from 'components';
import ErrorHandler from 'components/HOC/ErrorHandler';
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { dismissError, login } from 'store/actions';
import * as classes from './Login.scss';
import loginForm from './loginForm';

interface IProps {
  login: (email: string, password: string) => void;
  error: IError;
}

class Login extends Component<IProps> {
  public handleLogin = (evt: any) => {
    let email = '';
    let password = '';

    evt.map((el: any) => {
      if (el.id === 'username') {
        email = el.element.value;
      }
      if (el.id === 'password') {
        password = el.element.value;
      }
    });
    this.props.login(email, password);
  };

  public closeModal = () => {
    this.setState({
      ...this.state,
      error: null,
    });
  };

  public render() {
    return (
      <div className={classes.LoginContainer}>
        <div className={classes.LoginContent}>
          <div className={classes.LoginLogoContainer}>
            <img
              className={classes.LoginLogo}
              src={require('styles/assets/logo.png')}
            />
          </div>
          <FormElements data={loginForm} onSubmit={this.handleLogin} />
          <div className={classes.Register}>
            You don't have an account?{' '}
            <span className={classes.RegisterLnk}>Register</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch: any) => ({
  login: (email: string, password: string) => dispatch(login(email, password)),
  dismissError: () => dispatch(dismissError()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorHandler(Login));
