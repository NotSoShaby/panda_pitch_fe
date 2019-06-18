import React from 'react';
import InputRange from 'react-input-range';
import PropTypes from 'prop-types';
import 'react-input-range/lib/css/index.css';

// Input range definition
const InputRangeSelector = ({ value, max, minValue, maxValue, onChange, className }) => {
	// const handleOnChange = (newValue) => {
	// 	// if (value < 10) onChange(newValue);
	// 	// else if (value < 20) onChange(newValue);
	// 	onChange(value);
	// };
	return (
		<div className={className}>
			<InputRange value={value} minValue={minValue} maxValue={maxValue} maxLabel={max} onChange={onChange} />
		</div>
	);
};

// props initialization ( default values )
InputRangeSelector.defaultProps = {
	className: 'input_range',
	active: 1,
	minValue: 0,
	maxValue: 10,
	value: 0,
	onChange: () => {}
};

// props type definition
InputRangeSelector.propTypes = {
	value: PropTypes.number.isRequired,
	minValue: PropTypes.number.isRequired,
	maxValue: PropTypes.number,
	className: PropTypes.string,
	onChange: PropTypes.func
};

// default importing
export default InputRangeSelector;
