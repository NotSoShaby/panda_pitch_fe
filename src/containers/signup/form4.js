import React from 'react';
import Button from '../../components/button';
import HELPER from '../../utils/helper';

// render form3
const Form4 = ({ topics, onSubmit, onBack, onChange, onSelect, journalistProfile, error }) => {
	let { code, message } = journalistProfile;
	return (
		<div className="step_form_col">
			<div className="full_widt">
				<h2>What do you write about?</h2>
				<div className="custom_field">
					<input
						type="text"
						name="topics"
						value={topics}
						id="topics"
						placeholder="Enter Any Topic"
						onChange={onChange}
					/>
					<label htmlFor="topics">Topic</label>
				</div>

				<ul className="topic_list">
					<li onClick={() => onSelect('topics', 'Travel')}>
						<span>Travel</span>
					</li>
					<li onClick={() => onSelect('topics', 'Food')}>
						<span>Food</span>
					</li>
					<li onClick={() => onSelect('topics', 'Liesure')}>
						<span>Liesure</span>
					</li>
					<li onClick={() => onSelect('topics', 'Healthcare')}>
						<span>Healthcare</span>
					</li>
					<li onClick={() => onSelect('topics', 'Technology')}>
						<span>Technology</span>
					</li>
					<li onClick={() => onSelect('topics', 'News')}>
						<span>News</span>
					</li>
				</ul>
			</div>
			{error &&
			error.topics && <div className="error">{error.topics.map((msg, index) => <p key={index}>{msg}</p>)}</div>}
			{HELPER.isErrorInApi(code) && (
				<div className="error">{message.non_field_errors.map((msg, index) => <p key={index}>{msg}</p>)}</div>
			)}

			<div className="step_btn_wrapper">
				<Button type="submit" className="white_bg_btn" onClick={onBack}>
					Back
				</Button>
				<Button type="submit" className="green_bg_btn" onClick={onSubmit}>
					Next
				</Button>
			</div>
		</div>
	);
};

export default Form4;
