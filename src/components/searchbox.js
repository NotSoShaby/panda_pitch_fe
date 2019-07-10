import React from 'react';
import { PropTypes } from 'prop-types';
import IMAGES from '../assets/images';

const { SEARCH_ICON } = IMAGES;

const SearchBox = ({
	val, data, onSelect, setVal,
}) => {
	const search = (val) => {
		if (!data || data.length === 0) return null;
		return (
			<div className="srch_lst_row">
				{/* {data.map(({ name, profile, profilePic }) => { */}
				{data.map(({ id, name }) => {
					if (val && name.toLowerCase().includes(val.toLowerCase())) {
						return (
							<div key={name} className="srch_lst_col" role="button" onClick={() => onSelect(id)}>
								<div className="srch_pic">
									{/* <img src={profilePic} alt="profile_pic" /> */}
								</div>
								<span className="pro_detail">
									<h3>{name}</h3>
									{/* <p>{profile}</p> */}
								</span>
							</div>
						);
					}
					return null;
				})}
			</div>
		);
	};

	return (
		<React.Fragment>
			<div key="search_box" className="srch_col place">
				<input
					type="search"
					placeholder="Search for journalists or media outlets"
					value={val}
					onChange={e => setVal(e.target.value)}
				/>
				<button type="button">
					<img className="srch_icn" src={SEARCH_ICON} alt="search" />
				</button>
			</div>
			{search(val)}
		</React.Fragment>
	);
};

SearchBox.defaultProps = {
	data: [],
	val: '',
	// setVal: () => {},
};

SearchBox.propTypes = {
	data: PropTypes.array,
	val: PropTypes.string,
	setVal: PropTypes.func.isRequired,
};

export default SearchBox;
