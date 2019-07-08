import React from 'react';
import PropTypes from 'prop-types';

// Button definition
const Button = ({
	children, type, className, onClick,
}) => (
	<button type={type} className={`btn btn-default ${className}`} onClick={onClick}>
		{children}
	</button>
);

// props initialization ( default values )
Button.defaultProps = {
	type: 'button',
	className: '',
	onClick: () => {},
};

// props type definition
Button.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
};

// default importing
export default Button;
