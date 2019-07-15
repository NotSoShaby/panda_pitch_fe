import React from 'react';
import StatusBar from '../../components/statusBar';
import Form1 from './form1';
import Form2 from './form2';
import Form3 from './form3';
import Form4 from './form4';
import IMAGES from '../../assets/images';
import HELPER from '../../utils/helper';

// condition form rendering
const RenderForm = ({ ...props }) => {
	const { step } = props;
	if (step === 1) return <Form1 {...props} />;
	if (step === 2) return <Form2 {...props} />;
	if (step === 3) return <Form3 {...props} />;
	return <Form4 {...props} />;
};

// status bar and sign up form
const SignUp = ({ ...props }) => {
	const { step, role } = props;
	let totalSteps = 4;
	if (HELPER.isPr(role)) { totalSteps = 3; }

	return (
		<div className="form_section">
			<div className="form_logo">
				<img src={IMAGES.WHITE_LOGO} alt="" />
			</div>
			<div className="form_wrapper">
				{step !== 1 && <StatusBar steps={totalSteps} active={step - 1} />}
				<RenderForm {...props} />
			</div>
		</div>
	);
};

// default importing
export default SignUp;
