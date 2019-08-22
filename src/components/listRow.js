import React from 'react';
import PropTypes from 'prop-types';
import IMAGES from '../assets/images';

const { GOOGLE } = IMAGES;

const ListRow = (props) => {
	const {
		title, description, logo, ownerData, onClick,
	} = props;
	const { full_name, position_data } = ownerData;
	// const time = new Date(date_posted);
	return (
		<div className="list_col" onClick={() => onClick(props)} role="button">
			<div className="list_lft">
				<img src={logo} alt="logo" />
			</div>
			<div className="list_middle">
				<h3>{title}</h3>
				<p>{description}</p>
				<p>
					<span className="list_cover">Covrage</span>
					{' '}
					<span className="list_time" />
				</p>
			</div>
			<div className="list_rgt">
				<div className="list_rgt_pro">
					{/* <img src={GOOGLE} alt="profile_pic" /> */}
				</div>
				<div className="list_rgt_cont">
					<h4>{full_name}</h4>
					<p>{position_data['0'].name}</p>
				</div>
			</div>
		</div>
	);
};

// props initialization ( default values )
ListRow.defaultProps = {
	logo: GOOGLE,
	title: '',
	description: '',
	onClick: () => {},
};

// props type definition
ListRow.propTypes = {
	logo: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	onClick: PropTypes.func,
};

// default importing
export default ListRow;
