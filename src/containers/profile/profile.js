import React from 'react';

const Profile = ({ profile: { data = { fullName: 'hhh' } } }) => {
	const m = 'm';
	console.log('jjj========>', data);
	return (
		<div>
      my profile
			{' '}
			{m}
			{data.fullName}
		</div>
	);
};

export default Profile;
