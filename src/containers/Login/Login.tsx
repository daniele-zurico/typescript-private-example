import axios from 'common/util/axios-http-auth';
import { FormElements, Modal } from 'components';
import * as React from 'react';
import { Component } from "react";
import * as classes from './Login.scss';
import loginForm from './loginForm';

export interface IState {
	errorMessage: string;
	error: boolean;
}
class Login extends Component<{}, IState> {

	public state = {
		error: false,
		errorMessage: ''
	}

	public handleLogin = (evt: any) => {
		let email = null;
		let password = null;
		let errorMessage = null;

		evt.map((el: any) => {
			if (el.id === 'username') {
				email = el.element.value;
			}
			if (el.id === 'password') {
				password = el.element.value;
			}
		});
		axios.post('verifyPassword', { email, password })
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				const error = err.response.data.error;
				switch (error.message) {
					case 'EMAIL_NOT_FOUND':
						errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted';
						break;
					case 'INVALID_PASSWORD':
						errorMessage = 'The password is invalid or the user does not have a password';
						break;
					case 'USER_DISABLED':
						errorMessage = 'The user account has been disabled by an administrator.';
						break;
					default:
						errorMessage = 'user invalid';
						break;
				}
				this.setState({ error: true, errorMessage });
			});
	};

	public closeModal = () => {
		this.setState({ error: false });
	}
	public render() {
		return (
			<div className={classes.LoginContainer}>
				<Modal
					isOpen={this.state.error}
					header='Error'
					onDismiss={this.closeModal}>
					{this.state.errorMessage}
				</Modal>
				<div className={classes.LoginContent}>
					<div className={classes.LoginLogoContainer}>
						<img className={classes.LoginLogo} src={require('styles/assets/logo.png')} />
					</div>
					<FormElements data={loginForm} onSubmit={this.handleLogin} />
					<div className={classes.Register}>You don't have an account? <span className={classes.RegisterLnk}>Register</span></div>
				</div>
			</div>
		);
	}
}

export default Login;