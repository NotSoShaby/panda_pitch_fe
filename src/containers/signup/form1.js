import React from 'react';
import Button from '../../components/button';

// render form1
const Form1 = ({ onUserSelection }) => (
	<div className="user_selection">
		<h2 key="heading" className="btn_head">
				Are You
		</h2>
		<div key="form1" className="step_form_col">
			<div className="step_btn_wrapper cstm_button_wrapper">
				<Button className="cstm_btn " onClick={() => onUserSelection('role', 'journalist')}>
						JOURNALIST
				</Button>
				<Button className="cstm_btn mgrt0" onClick={() => onUserSelection('role', 'pr')}>
						PR
				</Button>
			</div>
		</div>
	</div>
);

export default Form1;
