import React from 'react';
import InputRangeSelector from '../../components/inputRange';

const Question = ({
	onRangeChange, answers, id, text, ...props
}) => (
	<div className="slidecontainer">
		<p>{text}</p>
		<InputRangeSelector
			minValue={0}
			value={answers[id].value}
			maxValue={50}
			onChange={value => onRangeChange({ ...props, id, value })}
		/>
		<ul className="range_list">
			<li>1-10</li>
			<li>11-20</li>
			<li>21-50</li>
			<li>51+</li>
		</ul>
	</div>
);

export default Question;
