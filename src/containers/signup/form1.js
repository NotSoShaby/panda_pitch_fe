import React from 'react';
import Button from '../../components/button';
import { Link } from 'react-router-dom';

// render form1
const Form1 = ({ onSubmit, onBack, onUserSelection }) => {
	return (
		<div className="user_selection">
			<h2 key="heading" className="btn_head">
				Are You
			</h2>,
			<div key="form1" className="step_form_col">
				<div className="step_btn_wrapper cstm_button_wrapper">
					<Button className="cstm_btn " onClick={() => onUserSelection('type', 'journalist')}>
						JOURNALIST
					</Button>
					<Button className="cstm_btn mgrt0" onClick={() => onUserSelection('type', 'pr')}>
						PR
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Form1;
