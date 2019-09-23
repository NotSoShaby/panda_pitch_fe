import React from 'react';
import { Link } from 'react-router-dom';
import HELPER from '../../utils/helper';
import IMAGES from '../../assets/images';
import Button from '../../components/button';

// Login page rendering
const Login = ({
	onSubmit, onChange, login, error,
}) => {
	const { code } = login;

	return (
		<div className="form_section">
			<div className="form_logo">
				<img src={IMAGES.WHITE_LOGO} alt="" />
			</div>
			<div className="form_wrapper">
				<h2>Login</h2>
				<form className="step_form_col" onSubmit={onSubmit}>
					<div className="custom_field">
						<input
							type="text"
							name="email"
							id="email"
							placeholder="JaneAppleseed@gmail.com"
							onChange={onChange}
						/>
						<label htmlFor="email">Email</label>
					</div>
					{error
					&& error.email && (
						<div className="error">{error.email.map(msg => <p key={msg}>{msg}</p>)}</div>
					)}
					<div className="custom_field">
						<input
							type="password"
							name="password"
							id="password"
							placeholder="··················"
							onChange={onChange}
						/>
						<label htmlFor="password">Password</label>
					</div>
					{error
					&& error.password && (
						<div className="error">{error.password.map(msg => <p key={msg}>{msg}</p>)}</div>
					)}
					{HELPER.isErrorInApi(code)
					&& login.error.non_field_errors && (
						<div className="error">{login.error.non_field_errors.map(msg => <p key={msg}>{msg}</p>)}</div>
					)}
					<div className="step_btn_wrapper">
						<Button type="submit" className="green_bg_btn btn_cntr">Submit</Button>
					</div>
				</form>
				<p className="text-center sign_up_marg">
					<span>New user?</span>
					<span>
						<Link to="/signup">Signup</Link>
					</span>
				</p>
			</div>
		</div>
	);
};

// default importing
export default Login;
