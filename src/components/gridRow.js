import React from 'react';
import PropTypes from 'prop-types';
import IMAGES from '../assets/images';

const { GOOGLE } = IMAGES;

const GridRow = ({
	logo, title, time, description, score,
}) => (
	<div className="card_col">
		<div className="card_top_img">
			<img src={logo} alt="logo" />
		</div>
		<div className="card_contnt">
			<span className="cover">Coverage</span>
			<h3>{title}</h3>
			<p>{description}</p>
			<span className="time">{time}</span>
		</div>
		<p className="pitch_score green">
			<span>Pitch Score</span>
			<span className="pitch_num">{score}</span>
		</p>
		{/* <div className="card_pro_row">
				<div className="card_pro_img">
					<img src={image} alt="profile_pic" />
				</div>
				<div className="card_pro_contnt">
					<h3>{`${first_name} ${last_name}`}</h3>
					<p>{profile}</p>
				</div>
			</div> */}
	</div>
);

// props initialization ( default values )
GridRow.defaultProps = {
	logo: GOOGLE,
	// image: '',
	title: '',
	time: '',
	description: '',
	// name: '',
	score: '',
};

// props type definition
GridRow.propTypes = {
	logo: PropTypes.string,
	title: PropTypes.string,
	time: PropTypes.string,
	description: PropTypes.string,
	// image: PropTypes.string,
	// name: PropTypes.string,
	score: PropTypes.number,
};

// default importing
export default GridRow;
