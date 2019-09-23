import React from 'react';
import PropTypes from 'prop-types';


const Loader = ({ children, isLoading, className }) => {
	if (isLoading) {
		return (
			<div className={className}>
				<div className="loader">
					<img src="https://i.gifer.com/7YUz.gif" alt="loader" />
				</div>
				<div className="loader_cont">
					{children || 'isLoading...'}
				</div>
			</div>
		);
	}
	return children;
};

// props initialization ( default values )
Loader.defaultProps = {
	isLoading: true,
	className: 'loading',
};

// props type definition
Loader.propTypes = {
	isLoading: PropTypes.bool,
	className: PropTypes.string,
};

// default importing
export default Loader;
