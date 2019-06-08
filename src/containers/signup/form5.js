import React from 'react';
import Button from '../../components/button';
import InputRangeSelector from '../../components/inputRange';

// render form4
const Form5 = ({ pitches, relevant, onSubmit, onBack, onRangeChange }) => {
	return (
		<div className="step_form_col">
			<h2>Just a few Questions</h2>

			<div className="slidecontainer">
				<p>How many pitches(on average) do you receive per week</p>
				{/* pitches range selection */}
				<InputRangeSelector
					minValue={0}
					maxValue={50}
					value={pitches}
					onChange={(val) => onRangeChange('pitches', val)}
				/>
				<ul className="range_list">
					<li>1-10</li>
					<li>11-20</li>
					<li>21-50</li>
					<li>51+</li>
				</ul>
				{/* <input type="range" min="1" max="100" value="50" className="slider" /> */}
			</div>
			<div className="slidecontainer">
				<p>How many are relevant to you</p>
				{/* relevant range selection */}
				<InputRangeSelector
					minValue={0}
					maxValue={50}
					value={relevant}
					onChange={(val) => onRangeChange('relevant', val)}
				/>
				{/* <input type="range" min="1" max="100" value="50" className="slider" /> */}
				<ul className="range_list">
					<li>1-10</li>
					<li>11-20</li>
					<li>21-50</li>
					<li>51+</li>
				</ul>
			</div>
			<div className="step_btn_wrapper">
				<Button type="submit" className="white_bg_btn" onClick={onBack}>
					Back
				</Button>
				<Button type="submit" className="green_bg_btn" onClick={onSubmit}>
					Finish
				</Button>
			</div>
		</div>
	);
};

export default Form5;
