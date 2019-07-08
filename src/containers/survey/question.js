import React from 'react';
import InputRangeSelector from '../../components/inputRange';

const Question = ({ onRangeChange, answers, id, ...props }) => {
	return (
		<div className="slidecontainer">
			<p>{props.text}</p>
			<InputRangeSelector
				minValue={0}
				step={40 / 4}
				value={answers[id].value}
				maxValue={40}
				onChange={(value) => onRangeChange({ ...props, id, value })}
			/>
			<ul className="range_list">
				<li>0</li>
				<li>1-10</li>
				<li>11-20</li>
				<li>21-30</li>
				<li>40+</li>
			</ul>
		</div>
	);
};

export default Question;
