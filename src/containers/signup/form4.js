import React from 'react';
import Button from '../../components/button';
import HELPER from '../../utils/helper';
import AutoComplete from '../../components/autoComplete';

const List = [
	{
		id: 1,
		name: 'Travel',
	},
	{
		id: 1,
		name: 'Food',
	},
	{
		id: 1,
		name: 'Liesure',
	},
	{
		id: 1,
		name: 'Healthcare',
	},
	{
		id: 1,
		name: 'Technology',
	},
	{
		id: 1,
		name: 'News',
	},
];

// render form3
const Form4 = ({
	topics, onSubmit, onBack, onCreate, onTodoSelection, journalistProfile, error,
}) => {
	const { code, message } = journalistProfile;
	return (
		<div className="step_form_col">
			<div className="full_widt">
				<h2>What do you write about?</h2>
				<AutoComplete list={List} onCreate={onCreate} onSelect={onTodoSelection} boxes={topics} />
			</div>
			{error
			&& error.topics && <div className="error">{error.topics.map(msg => <p key={msg}>{msg}</p>)}</div>}
			{HELPER.isErrorInApi(code) && (
				<div className="error">{message.non_field_errors.map(msg => <p key={msg}>{msg}</p>)}</div>
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
