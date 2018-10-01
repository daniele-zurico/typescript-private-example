// import axios from 'common/util/axios-http-auth';
import { FormElements } from 'components';
import ErrorHandler from 'components/HOC/ErrorHandler';
import * as React from 'react';
import { Component } from "react";
import { connect } from 'react-redux';
import { login } from 'store/actions';
import * as classes from './Login.scss';
import loginForm from './loginForm';

interface IState {
	login: (email: string, password: string) => void
}

class Login extends Component<IState, {}> {

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
		// axios.post('verifyPassword', { email, password })
		// 	.then((res) => {
		// 		console.log(res);
		// 	});
		this.props.login(email, password);
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

// export default ErrorHandler(Login);
const mapStateToProps = (state: any) => ({
});
const mapDispatchToProps = (dispatch: any) => ({
	login: (email: string, password: string) => dispatch(login(email, password))
});
export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(Login));