import React from 'react';
import Button from '../../components/button';

// render form3
const Form4 = ({ topic, onSubmit, onBack, onChange, onSelect, error }) => {
	return (
		<div className="step_form_col">
			<div className="full_widt">
				<h2>What do you write about?</h2>
				<div className="custom_field">
					<input type="text" name="topic" value={topic} id="topic" placeholder="Enter Any Topic" onChange={onChange} />
					<label htmlFor="topic">Topic</label>
				</div>

				<ul className="topic_list">
					<li onClick={() => onSelect('topic', 'Travel')}>
						<span>Travel</span>
					</li>
					<li onClick={() => onSelect('topic', 'Food')}>
						<span>Food</span>
					</li>
					<li onClick={() => onSelect('topic', 'Liesure')}>
						<span>Liesure</span>
					</li>
					<li onClick={() => onSelect('topic', 'Healthcare')}>
						<span>Healthcare</span>
					</li>
					<li onClick={() => onSelect('topic', 'Technology')}>
						<span>Technology</span>
					</li>
					<li onClick={() => onSelect('topic', 'News')}>
						<span>News</span>
					</li>
				</ul>
			</div>
			{error && error.topic && <div className="error">{error.topic.map((msg) => <p>{msg}</p>)}</div>}

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
