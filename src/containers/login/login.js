import React from 'react';
import Button from '../../components/button';
import { Link } from 'react-router-dom';
import HELPER from '../../utils/helper';
import IMAGES from '../../assets/images';

// Login page rendering
const Login = ({ onSubmit, onChange, login, error }) => {
	let { code, message } = login;

	return (
		<div className="form_section">
			<div className="form_logo">
				<img src={IMAGES.WHITE_LOGO} alt="" />
			</div>
			<div className="form_wrapper">
				<h2>Login</h2>
				<div className="step_form_col">
					<div className="custom_field">
						<input
							type="text"
							name="username"
							id="username"
							placeholder="JaneAppleseed@gmail.com"
							onChange={onChange}
						/>
						<label htmlFor="username">Email Id</label>
					</div>
					{error &&
					error.username && <div className="error">{error.username.map((msg, index) => <p key={index}>{msg}</p>)}</div>}
					<div className="custom_field">
						<input type="password" name="password" id="password" placeholder="··················" onChange={onChange} />
						<label htmlFor="password">Password</label>
					</div>
					{error &&
					error.password && <div className="error">{error.password.map((msg, index) => <p key={index}>{msg}</p>)}</div>}
					{HELPER.isErrorInApi(code) &&
					message.non_field_errors && (
						<div className="error">{message.non_field_errors.map((msg, index) => <p key={index}>{msg}</p>)}</div>
					)}
					<div className="step_btn_wrapper">
						<Button className="green_bg_btn btn_cntr" onClick={onSubmit}>
							Submit
						</Button>
					</div>
				</div>
				<p className="text-center sign_up_marg">
					New user?<span>
						<Link to="/signup">Signup</Link>
					</span>
				</p>
			</div>
		</div>
	);
};

// default importing
export default Login;
