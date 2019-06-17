import React from 'react';
import Button from '../../components/button';
import { Link } from 'react-router-dom';

// Login page rendering
const Login = ({ onBack, onSubmit }) => {
	return (
		<div className="form_section">
			<div className="form_logo">
				<img src="img/logo.svg" alt="" />
			</div>
			<div className="form_wrapper">
				<h2>Login</h2>
				<form className="step_form_col">
					<div className="custom_field">
						<input type="text" name="emailid" id="emailid" placeholder="JaneAppleseed@gmail.com" />
						<label htmlFor="emailid">Email Id</label>
					</div>
					<div class="custom_field">
						<input type="password" name="password" id="password" placeholder="··················" />
						<label htmlFor="password">Password</label>
					</div>
					<div className="step_btn_wrapper">
						<Button type="submit" className="green_bg_btn" onClick={onSubmit}>
							Submit
						</Button>
					</div>
				</form>
				<p className="text-center">
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
