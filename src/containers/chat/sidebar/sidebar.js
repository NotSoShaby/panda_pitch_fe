import React from 'react';

const Sidebar = () => (
	<ul style={{ width: '25%' }}>
		{['David', 'Michael', 'Refael', 'Andrew'].map(user => <li>{user}</li>)}
	</ul>

);

export default Sidebar;
