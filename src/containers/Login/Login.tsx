import axios from 'common/util/axios-http-auth';
import { FormElements } from 'components';
import ErrorHandler from 'components/HOC/ErrorHandler';
import * as React from 'react';
import { Component } from "react";
import * as classes from './Login.scss';
import loginForm from './loginForm';

class Login extends Component<{}, {}> {

	public handleLogin = (evt: any) => {
		let email = null;
		let password = null;

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
				console.log(res);
			});
	};

	public closeModal = () => {
		this.setState({ error: false });
	}

	public render() {
		return (
			<div className={classes.LoginContainer}>
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

export default ErrorHandler(Login);