import React from 'react';
import PropTypes from 'prop-types';
import IMAGES from '../assets/images';

const { GOOGLE } = IMAGES;

const ListRow = ({
	logo,
	title,
	time,
	description,
	profile,
	author: { image },
	author: { user },
}) => {
	const { first_name, last_name } = user;
	return (
		<div className="list_col">
			<div className="list_lft">
				<img src={logo} alt="logo" />
			</div>
			<div className="list_middle">
				<h3>{title}</h3>
				<p>{description}</p>
				<p>
					<span className="list_cover">Covrage</span>
					{' '}
					<span className="list_time">{time}</span>
				</p>
			</div>
			<div className="list_rgt">
				<div className="list_rgt_pro">
					<img src={image} alt="profile_pic" />
				</div>
				<div className="list_rgt_cont">
					<h4>{`${first_name} ${last_name}`}</h4>
					<p>{profile}</p>
				</div>
			</div>
		</div>
	);
};

// props initialization ( default values )
ListRow.defaultProps = {
	logo: GOOGLE,
	// image: '',
	title: '',
	time: '',
	description: '',
	// name: '',
	profile: '',
};

// props type definition
ListRow.propTypes = {
	logo: PropTypes.string,
	title: PropTypes.string,
	time: PropTypes.string,
	description: PropTypes.string,
	// image: PropTypes.string,
	// name: PropTypes.string,
	profile: PropTypes.string,
};

// default importing
export default ListRow;
