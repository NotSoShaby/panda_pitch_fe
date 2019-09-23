import React from 'react';
import PropTypes from 'prop-types';

// set bar status
function statusClassName({ index, active }) {
	if (index === active) return 'active';
	if (index < active) return 'completed';
	return '';
}

// Status bar definition
const StatusBar = ({ steps, active, className }) => {
	const totalSteps = parseInt(steps, 10) - 1;
	const width = Math.ceil(27 / totalSteps);

	const options = [];
	for (let i = 1; i <= steps; i++) {
		options.push(
			<li style={{ width: `calc((100% / ${totalSteps}) - ${width}px)` }} key={i} className={statusClassName({ index: i, active })}>
				<span>&nbsp;</span>
			</li>,
		);
	}
	return <ul className={className}>{options}</ul>;
};

// props initialization ( default values )
StatusBar.defaultProps = {
	className: 'progress_bar',
};

// props type definition
StatusBar.propTypes = {
	steps: PropTypes.number.isRequired,
	active: PropTypes.number.isRequired,
	className: PropTypes.string,
};

// default importing
export default StatusBar;
