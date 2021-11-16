import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default class Login extends Component {
	state = {
		loggedinUser: {
			email: '',
			password: '',
			token: null,
			loggedIn: false,
		},
	};

	handleInput = (key, value) => {
		this.setState({
			loggedinUser: {
				...this.state.loggedinUser,
				[key]: value,
			},
		});
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		console.log(this.state.loggedinUser);

		try {
			let response = await fetch('http://localhost:3001/whatsapp/login', {
				method: 'POST',
				body: JSON.stringify(this.state.loggedinUser),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (response.ok) {
				let data = await response.json();
				console.log(data);

				localStorage.setItem('token', data.token);

				alert('login Successfull');
				this.setState({
					loggedinUser: {
						email: '',
						password: '',
						loggedIn: true,
						token: localStorage.getItem('token'),
					},
				});
			} else {
				alert('SOMETHING WENT WRONG ON THE SERVER');
			}
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<>
				{!this.state.loggedinUser.loggedIn ? (
					<div className='auth-wrapper'>
						<div className='auth-inner'>
							<form onSubmit={this.handleSubmit}>
								<h3>Login</h3>

								<div className='form-group'>
									<label>Email address</label>
									<input
										type='email'
										className='form-control'
										placeholder='Enter email'
										value={this.state.loggedinUser.email}
										onChange={(e) => this.handleInput('email', e.target.value)}
									/>
								</div>

								<div className='form-group'>
									<label>Password</label>
									<input
										type='password'
										className='form-control'
										placeholder='Enter password'
										value={this.state.loggedinUser.password}
										onChange={(e) =>
											this.handleInput('password', e.target.value)
										}
									/>
								</div>

								<div className='form-group'>
									<div className='custom-control custom-checkbox'>
										<input
											type='checkbox'
											className='custom-control-input'
											id='customCheck1'
										/>
										<label
											className='custom-control-label'
											htmlFor='customCheck1'>
											Remember me
										</label>
									</div>
								</div>

								<button type='submit' className='btn btn-primary btn-block'>
									Submit
								</button>
								<p className='forgot-password text-right'>
									Forgot <Link to='/resetpassword'>password?</Link>
								</p>
								<p className='forgot-password text-right'>
									Don't have a account <Link to='/register'>Register?</Link>
								</p>
							</form>
						</div>
					</div>
				) : (
					this.props.history.push('/chatroom')
				)}
			</>
		);
	}
}
