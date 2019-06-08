import React from 'react';
import Button from '../../components/button';

// render form2
const Form3 = ({ onSubmit, onBack, onChange, outlet, position, twitter }) => {
	return [
		<div key="form2" className="step_form_col">
			<div className="full_widt">
				<h2>Which outlets do you write for?</h2>
				<div className="custom_field">
					<input type="text" name="outlet" value={outlet} id="outlet" placeholder="Outlet Name" onChange={onChange} />
					<label htmlFor="outlet">Outlet</label>
				</div>
			</div>

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

			<div className="full_widt">
				<h2>Add social media</h2>
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
