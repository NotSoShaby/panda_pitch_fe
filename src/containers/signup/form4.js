import React from 'react';
import Button from '../../components/button';
import HELPER from '../../utils/helper';
import AutoComplete from '../../components/autoComplete';

// render form3
const Form4 = ({
	topics,
	onSubmit,
	onBack,
	onCreate,
	onTodoSelection,
	journalistProfile,
  journalistInterests,
  getJournalistInterests,
	error
}) => {
	let { code, message } = journalistProfile;
	return (
		<div className="step_form_col">
			<h2 className="mbot30">What do you write about?</h2>
			<div className="full_widt mbot_zero">
				<h3>Topic</h3>
          <AutoComplete 
            list={journalistInterests.data && journalistInterests.data.results} 
            onCreate={onCreate} 
            onSelect={onTodoSelection} 
            boxes={topics} 
            onChange={getJournalistInterests}
          />
			</div>

			{error &&
			error.topics && <div className="error">{error.topics.map((msg, index) => <p key={index}>{msg}</p>)}</div>}
			{HELPER.isErrorInApi(code) &&
			message.non_field_errors && (
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
