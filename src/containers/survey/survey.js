import React from 'react';
import Button from '../../components/button';
import Question from './question';
import IMAGES from '../../assets/images';

// Login page rendering
const Survey = ({ onBack, onSubmit, survey, answers, onRangeChange }) => {
  let questions = survey.data.questions || [];
	return (
		<div className="form_section">
			<div className="form_logo">
				<img src={IMAGES.WHITE_LOGO} alt="" />
			</div>
			<div className="form_wrapper">
				<div className="step_form_col">
					<h2>Just a few Questions</h2>

					{questions.map((question, index) => (
						<Question key={index} {...question} onRangeChange={onRangeChange} answers={answers} />
					))}
					<div className="step_btn_wrapper">
						<Button type="submit" className="white_bg_btn" onClick={onBack}>
							Back
						</Button>
						<Button type="submit" className="green_bg_btn" onClick={onSubmit}>
							Finish
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

// default importing
export default Survey;
