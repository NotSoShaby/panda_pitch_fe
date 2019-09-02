import React from 'react';
import _ from 'lodash';
import Button from '../../components/button';
import Question from './question';
import IMAGES from '../../assets/images';
import StatusBar from '../../components/statusBar';

// Login page rendering
const Survey = ({
	onBack, onSubmit, survey, answers, onRangeChange, login: { data: { user } },
}) => {
	const questions = _.orderBy(survey.data.questions, 'id', 'asc') || [];
	let totalSteps = 4;
	if (user && user.is_pr) {
		totalSteps = 3;
	}

	return (
		<div className="form_section">
			<div className="form_logo">
				<img src={IMAGES.WHITE_LOGO} alt="" />
			</div>
			<div className="form_wrapper">
				<StatusBar steps={totalSteps} active={totalSteps} />
				<div className="step_form_col">
					<h2>Just a few Questions</h2>

					{questions.map(question => (
						<Question
							key={question.id}
							{...question}
							onRangeChange={onRangeChange}
							answers={answers}
						/>
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
