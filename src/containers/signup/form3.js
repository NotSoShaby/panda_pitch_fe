import React from 'react';
import Button from '../../components/button';
import HELPER from '../../utils/helper';

// render form2
const Form3 = ({
	onSubmit,
	onBack,
	onChange,
	outlet,
	company,
	position,
	twitter,
	linkedIn,
	signup,
	prProfile,
	error,
	...props
}) => {
	let { data } = signup;
	let { code, message } = prProfile;
	return [
		<div key="form2" className="step_form_col">
			{HELPER.isJournalist(data.role) ? (
				<div>
					<div className="full_widt">
						<h2>Which outlets do you write for?</h2>
						<div className="custom_field">
							<input
								type="text"
								name="outlet"
								value={outlet}
								id="outlet"
								placeholder="Outlet Name"
								onChange={onChange}
							/>
							<label htmlFor="outlet">Outlet</label>
						</div>
					</div>
					{error &&
					error.outlet && <div className="error">{error.outlet.map((msg, index) => <p key={index}>{msg}</p>)}</div>}
				</div>
			) : (
				<div>
					<div className="full_widt">
						<h2>What's your company name?</h2>
						<div className="custom_field">
							<input
								type="text"
								name="company"
								value={company}
								id="company"
								placeholder="Company Name"
								onChange={onChange}
							/>
							<label htmlFor="company">Company</label>
						</div>
					</div>
					{error &&
					error.company && <div className="error">{error.company.map((msg, index) => <p key={index}>{msg}</p>)}</div>}
				</div>
			)}

			<div className="full_widt">
				<h2>Whats your position?</h2>
				<div className="custom_field">
					<input
						type="text"
						name="position"
						value={position}
						id="position"
						placeholder="Position Name"
						onChange={onChange}
					/>
					<label htmlFor="position">Position</label>
				</div>
			</div>
			{error &&
			error.position && <div className="error">{error.position.map((msg, index) => <p key={index}>{msg}</p>)}</div>}
			<div className="full_widt">
				<h2>Add social media</h2>
				{HELPER.isPr(data.role) && (
					<div className="custom_field">
						<input
							type="text"
							name="linkedIn"
							value={linkedIn}
							id="linkedIn"
							placeholder="linkedIn Name"
							onChange={onChange}
						/>
						<label htmlFor="twitter">LinkediIn</label>
					</div>
				)}
				{error &&
				error.linkedIn && <div className="error">{error.linkedIn.map((msg, index) => <p key={index}>{msg}</p>)}</div>}
				<div className="custom_field">
					<input
						type="text"
						name="twitter"
						value={twitter}
						id="twitter"
						placeholder="Twitter Name"
						onChange={onChange}
					/>
					<label htmlFor="twitter">Twitter</label>
				</div>
			</div>
			{error &&
			error.twitter && <div className="error">{error.twitter.map((msg, index) => <p key={index}>{msg}</p>)}</div>}
			{HELPER.isErrorInApi(code) && (
				<div className="error">{message.non_field_errors.map((msg, index) => <p key={index}>{msg}</p>)}</div>
			)}

			<div className="step_btn_wrapper">
				<Button className="white_bg_btn" onClick={onBack}>
					Back
				</Button>
				<Button className="green_bg_btn" onClick={onSubmit}>
					Next
				</Button>
			</div>
		</div>
	];
};

export default Form3;
