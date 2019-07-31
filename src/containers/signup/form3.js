import React from 'react';
import Button from '../../components/button';
// import HELPER from '../../utils/helper';

// render form2
const Form3 = ({
	onSubmit,
	onChange,
	outlet,
	company,
	position,
	twitter,
	linkedIn,
	isPr,
	// isJournalist,
	// prProfile,
	error,
}) => [
	<div key="form2" className="step_form_col">
		<h2 className="mbot30">Tell us a little about yourself</h2>
		{isPr ? (
			<div>
				<div className="full_widt">
					<h3>Which outlets do you write for?</h3>
					<div className="custom_field">
						<input
							type="text"
							name="outlet"
							value={outlet || ''}
							id="outlet"
							placeholder="Outlet Name"
							onChange={onChange}
						/>
						<label htmlFor="outlet">Outlet</label>
					</div>
				</div>
				{error
					&& error.outlet && <div className="error">{error.outlet.map(msg => <p key={msg}>{msg}</p>)}</div>}
			</div>
		) : (
			<div>
				<div className="full_widt">
					<h3>What's your company name?</h3>
					<div className="custom_field">
						<input
							type="text"
							name="company"
							value={company || ''}
							id="company"
							placeholder="Company Name"
							onChange={onChange}
						/>
						<label htmlFor="company">Company</label>
					</div>
				</div>
				{error
					&& error.company && <div className="error">{error.company.map(msg => <p key={msg}>{msg}</p>)}</div>}
			</div>
		)}

		<div className="full_widt">
			<h3>Whats your position?</h3>
			<div className="custom_field">
				<input
					type="text"
					name="position"
					value={position || ''}
					id="position"
					placeholder="Position Name"
					onChange={onChange}
				/>
				<label htmlFor="position">Position</label>
			</div>
		</div>
		{error
			&& error.position && <div className="error">{error.position.map(msg => <p key={msg}>{msg}</p>)}</div>}
		<div className="full_widt mbot_zero">
			<h3>Add social media</h3>
			{isPr && (
				<div className="custom_field">
					<input
						type="text"
						name="linkedIn"
						value={linkedIn || ''}
						id="linkedIn"
						placeholder="linkedIn Name"
						onChange={onChange}
					/>
					<label htmlFor="linkedIn">LinkedIn</label>
				</div>
			)}
			{error
				&& error.linkedIn && <div className="error">{error.linkedIn.map(msg => <p key={msg}>{msg}</p>)}</div>}
			<div className="custom_field">
				<input
					type="text"
					name="twitter"
					value={twitter || ''}
					id="twitter"
					placeholder="Twitter Name"
					onChange={onChange}
				/>
				<label htmlFor="twitter">Twitter</label>
			</div>
		</div>
		{error
			&& error.twitter && <div className="error">{error.twitter.map(msg => <p key={msg}>{msg}</p>)}</div>}
		{/* {HELPER.isErrorInApi(code) && prProfile.error.non_field_errors && (
        <div className="error">{prProfile.error.non_field_errors.map(msg =>
          <p key={msg}>{msg}</p>)}</div>
			)} */}

		<div className="step_btn_wrapper">
			{/* <Button className="white_bg_btn" onClick={onBack}>
					Back
				</Button> */}
			<Button className="green_bg_btn signup_btn_cntr" onClick={onSubmit}> Next </Button>
		</div>
	</div>,
];
export default Form3;
