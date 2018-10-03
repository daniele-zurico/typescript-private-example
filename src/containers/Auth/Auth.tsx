import { IError } from 'common/interfaces';
import { FormElements } from 'components';
import ErrorHandler from 'components/HOC/ErrorHandler';
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { authStart, dismissError } from 'store/actions';
import * as classes from './Auth.scss';
import authForm from './authForm';

interface IProps {
  auth: (email: string, password: string, isRegister: boolean) => void;
  error: IError;
}

interface IState {
  isRegister: boolean;
}

class Auth extends Component<IProps, IState> {
  public state = {
    isRegister: false,
  };

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
    this.props.auth(email, password, this.state.isRegister);
  };

  public handleRegister = () => {
    this.setState(
      (prevState: IState) => ({
        isRegister: !prevState.isRegister,
      }),
      () => console.log(this.state)
    );
  };

  public render() {
    return (
      <div className={classes.AuthContainer}>
        <div className={classes.AuthContent}>
          <div className={classes.AuthLogoContainer}>
            <img
              className={classes.AuthLogo}
              src={require('styles/assets/logo.png')}
            />
          </div>

          <FormElements
            key={this.state.isRegister ? 'register' : 'login'}
            data={authForm(this.state.isRegister)}
            onSubmit={this.handleLogin}
          />

          <div className={classes.Register}>
            You don't have an account?{' '}
            <span className={classes.RegisterLnk} onClick={this.handleRegister}>
              Register
            </span>
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
  auth: (email: string, password: string, isRegister: boolean) =>
    dispatch(authStart(email, password, isRegister)),
  dismissError: () => dispatch(dismissError()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorHandler(Auth));

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
