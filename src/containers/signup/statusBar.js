import React from 'react';
import PropTypes from 'prop-types';

// set bar status
function className({ index, active }) {
	if (index === active) return 'active';
	else if (index < active) return 'completed';
	else return '';
}

// Status bar definition
const StatusBar = ({ steps, active }) => {
	let options = [];
	for (let i = 1; i <= steps; i++) {
		options.push(
			<li key={i} className={className({ index: i, active })}>
				<span>&nbsp;</span>
			</li>
		);
	}
	return <ul className="progress_bar">{options}</ul>;
};

// props initialization ( default values )
StatusBar.defaultProps = {
	steps: 2,
	active: 1
};

// props type definition
StatusBar.propTypes = {
	steps: PropTypes.number.isRequired,
	active: PropTypes.number.isRequired,
	className: PropTypes.string
};

// default importing
export default StatusBar;
