import React from 'react';
import InputRange from 'react-input-range';
import PropTypes from 'prop-types';
import 'react-input-range/lib/css/index.css';

// Input range definition
const InputRangeSelector = ({
	value, max, minValue, maxValue, onChange, className, step,
}) => (
	<div className={className}>
		<InputRange
			step={step}
			value={value}
			minValue={minValue}
			maxValue={maxValue}
			maxLabel={max}
			onChange={onChange}
		/>
	</div>
);

// props initialization ( default values )
InputRangeSelector.defaultProps = {
	step: 0,
	className: 'input_range',
	minValue: 0,
	maxValue: 10,
	value: 0,
	onChange: () => {},
};

// props type definition
InputRangeSelector.propTypes = {
	step: PropTypes.number,
	value: PropTypes.number,
	minValue: PropTypes.number,
	maxValue: PropTypes.number,
	className: PropTypes.string,
	onChange: PropTypes.func,
};

// default importing
export default InputRangeSelector;
