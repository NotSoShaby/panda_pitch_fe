import React from 'react';

const NotFound = ({ location: { state = '"Not Found"' } }) => (
	<div>
		{state}
	</div>
);

export default NotFound;
