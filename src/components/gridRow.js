import React from 'react';
import PropTypes from 'prop-types';
import IMAGES from '../assets/images';

const { GOOGLE } = IMAGES;

const GridRow = (props) => {
	const {
		title, score, description, date_posted, logo, ownerData, onClick,
	} = props;
	const { full_name, position_data } = ownerData;
	const time = new Date(date_posted);
	return (
		<div className="card_col" onClick={() => onClick(props)} role="button">
			<div className="card_top_img">
				<img src={logo} alt="logo" />
			</div>
			<div className="card_contnt">
				<span className="cover">Coverage</span>
				<h3>{title}</h3>
				<p>{description}</p>
				<span className="time">
					{time.toLocaleString(
						'en-US', { hour: 'numeric', minute: 'numeric', hour12: true },
					)}
				</span>
			</div>
			<p className="pitch_score green">
				<span>Pitch Score</span>
				<span className="pitch_num">{score}</span>
			</p>
			<div className="card_pro_row">
				<div className="card_pro_img">
					<img src={GOOGLE} alt="profile_pic" />
				</div>
				<div className="card_pro_contnt">
					<h3>{full_name}</h3>
					<p>{position_data['0'].name}</p>
				</div>
			</div>
		</div>
	);
};

// props initialization ( default values )
GridRow.defaultProps = {
	logo: GOOGLE,
	title: '',
	description: '',
	score: '',
	onClick: () => {},
};

// props type definition
GridRow.propTypes = {
	logo: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	score: PropTypes.number,
	onClick: PropTypes.func,
};

// default importing
export default GridRow;
