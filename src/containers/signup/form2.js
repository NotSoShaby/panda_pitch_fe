import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button';
// import HELPER from '../../utils/helper';

// render form1
const Form2 = ({
	onSubmit, onBack, onChange, email, password, fullName, login, ...rest
}) => {
	const error = login && login.error && Object.keys(login.error).length ? login.error : rest.error;
	return [
		<h2 key="heading">Sign Up</h2>,
		<div key="form1" className="step_form_col">
			<div className="custom_field">
				<input
					type="text"
					name="fullName"
					id="fullName"
					value={fullName || ''}
					placeholder="Jane Appleseed"
					onChange={onChange}
				/>
				<label htmlFor="fullName">Full Name</label>
			</div>
			{error
				&& error.fullName && <div className="error">{error.fullName.map(msg => <p key={msg}>{msg}</p>)}</div>}

			<div className="custom_field">
				<input
					type="email"
					name="email"
					id="email"
					value={email || ''}
					placeholder="JaneAppleseed@gmail.com"
					onChange={onChange}
				/>
				<label htmlFor="email">Email</label>
			</div>
			{error
      && error.email && <div className="error">{error.email.map(msg => <p key={msg}>{msg}</p>)}</div>}

			<div className="custom_field">
				<input
					type="password"
					name="password"
					value={password || ''}
					id="password"
					placeholder="··················"
					onChange={onChange}
				/>
				<label htmlFor="password">Password</label>
			</div>
			{error
				&& error.password && <div className="error">{error.password.map(msg => <p key={msg}>{msg}</p>)}</div>}

			{error && error.non_field_errors && (
				<div className="error">{error.non_field_errors.map(msg => <p key={msg}>{msg}</p>)}</div>
			)}
			<div className="step_btn_wrapper">
				<Button className="white_bg_btn" onClick={onBack}>Back</Button>
				<Button className="green_bg_btn" onClick={onSubmit}>Next</Button>
			</div>
		</div>,
		<p key="login" className="text-center">
			<span>Already have an account?</span>
			<span>
				<Link to="/login">Login</Link>
			</span>
		</p>,
	];
};

export default Form2;
