import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tabData, onTabChange, tabName }) => (
	<ul className="msg-tab nav nav-pills">
		{
			tabData.map(tab => (
				<li key={tab} className={tab === tabName ? 'activeTab' : ''}>
					<button onClick={() => onTabChange(tab)}>{tab}</button>
				</li>
			))
		}
	</ul>

);

// props initialization ( default values )
Tabs.defaultProps = {
	tabData: [],
	tabName: 'Latest',
	onTabChange: () => { },
};

// props type definition
Tabs.propTypes = {
	tabData: PropTypes.array,
	tabName: PropTypes.string,
	onTabChange: PropTypes.func,
};

// default importing
export default Tabs;
