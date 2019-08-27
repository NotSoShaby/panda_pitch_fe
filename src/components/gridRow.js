import React from 'react';
import PropTypes from 'prop-types';
import IMAGES from '../assets/images';
import METADATA from '../utils/metadata';

const { LOGO_SAMPLE, GOOGLE, DELETE } = IMAGES;

const { MONTHS } = METADATA;

const GridRow = (props) => {
	const {
		title, description, clientData, ownerData, datePosted, onClick, login,
	} = props;
	const { full_name, position_data } = ownerData || {};
	const { image } = clientData || {};
	const time = new Date(datePosted);
	return (
		<div className="card_col" onClick={() => onClick(props)} role="button">
			<div className="card_top_img">
				<img src={image || LOGO_SAMPLE} alt="logo" />
			</div>
			<div className="card_contnt">
				<span className="cover">Coverage</span>
				<h3>{title}</h3>
				<p>{description}</p>
				<span className="time">
					{/* {time.toLocaleString('en-US', { hour: 'numeric', hour12: true })} */}
					{`${MONTHS[time.getMonth()]} ${time.getDate()}`}
				</span>
			</div>
			{/* <p className="pitch_score green">
				<span>Pitch Score</span>
				<span className="pitch_num">{score}</span>
			</p> */}
			<div className="card_pro_row pitch_list">
				<img src={GOOGLE} alt="profile_pic" className="pitch_list_img" />
				<div className="card_pro_contnt">
					<h3>{full_name}</h3>
					<p>{position_data && position_data['0'].name}</p>
				</div>
			</div>
			{login.data && !login.data.isJournalist
				? (
					<button className="card_pro_row pitch_list_action ">
						<img src={DELETE} alt="profile_pic" className="pitch_list_action_img" />
						<span>Delete</span>
					</button>
				) : null}
		</div>
	);
};

// props initialization ( default values )
GridRow.defaultProps = {
	title: '',
	description: '',
	onClick: () => {},
};

// props type definition
GridRow.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	onClick: PropTypes.func,
};

// default importing
export default GridRow;
