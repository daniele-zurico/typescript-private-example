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

interface IStateToProps {
  auth: {
    error: IError;
  };
}

const mapStateToProps = (state: IStateToProps) => ({
  error: {
    ...state.auth.error,
    code: state.auth.error.code,
    message: messageFromKey(state.auth.error.message),
  },
});

const mapDispatchToProps = (dispatch: any) => ({
  login: (email: string, password: string) => dispatch(login(email, password)),
  dismissError: () => dispatch(dismissError()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorHandler(Login));

export const messageFromKey = (message: string): string | JSX.Element => {
  switch (message) {
    case 'EMAIL_NOT_FOUND':
      return (
        <React.Fragment>
          <p>There is no user record corresponding to this identifier.</p>
          <p> The user may have been deleted.</p>
        </React.Fragment>
      );
    case 'INVALID_PASSWORD':
      return `The password is invalid or the user does not have a password.`;
    case 'USER_DISABLED':
      return `The user account has been disabled by an administrator.`;
    default:
      return message;
  }
};
