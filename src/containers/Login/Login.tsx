import { FormElements, Modal } from 'components';
import * as React from 'react';
import { Component } from "react";
import * as classes from './Login.scss';
import loginForm from './loginForm';

class Login extends Component<{}, {}> {
	public handleLogin = (evt: React.FormEvent) => {
		console.log('do login', evt);
	};
	public render() {
		return (
			<div className={classes.LoginContainer}>
				<Modal isOpen={true} />
				<div className={classes.LoginContent}>
					<div className={classes.LoginLogoContainer}>
						<img className={classes.LoginLogo} src={require('styles/assets/logo.png')} />
					</div>
					<FormElements data={loginForm} onSubmit={this.handleLogin} />
				</div>
			</div>
		);
	}
}

export default Login;