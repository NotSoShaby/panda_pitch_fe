import React from 'react';
import PropTypes from 'prop-types';

const ListRow = (props) => {
	const {
		title, description, clientData, ownerData, datePosted, onClick,
	} = props;
	const { full_name, position_data } = ownerData || {};
	const { image } = clientData || {};
	const time = new Date(datePosted);
	return (
		<div className="list_col" onClick={() => onClick(props)} role="button">
			<div className="list_lft">
				<img src={image} alt="logo" />
			</div>
			<div className="list_middle">
				<h3>{title}</h3>
				<p>{description}</p>
				<p>
					<span className="list_cover">Covrage</span>
					{' '}
					<span className="list_time">
						{time.toLocaleString('en-US', { hour: 'numeric', hour12: true })}
					</span>
				</p>
			</div>
			<div className="list_rgt">
				<div className="list_rgt_pro">
					{/* <img src={GOOGLE} alt="profile_pic" /> */}
				</div>
				<div className="list_rgt_cont">
					<h4>{full_name}</h4>
					<p>{position_data && position_data['0'].name}</p>
				</div>
			</div>
		</div>
	);
};

// props initialization ( default values )
ListRow.defaultProps = {
	title: '',
	description: '',
	onClick: () => {},
};

// props type definition
ListRow.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	onClick: PropTypes.func,
};

// default importing
export default ListRow;
