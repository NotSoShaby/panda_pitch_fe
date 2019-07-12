import React from 'react';
import { PropTypes } from 'prop-types';
import IMAGES from '../assets/images';

const imagepath = require('../../public/images/google.jpg');

const { SEARCH_ICON } = IMAGES;

const SearchBox = ({
	searchString, data, onSelect, setSearchValue, placeholder,
}) => {
	const search = (searchString) => {
		if (!data || data.length === 0) return null;
		return (
			<div className="srch_lst_row">
				{/* {data.map(({ name, profile, profilePic }) => { */}
				{data.map(({ id, name }) => {
					if (searchString && name.toLowerCase().includes(searchString.toLowerCase())) {
						return (
							<div key={name} className="srch_lst_col" role="button" onClick={() => onSelect(id)}>
								<div className="srch_pic">
									<img src={imagepath} alt="profile_pic" />
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
					placeholder={placeholder}
					value={searchString}
					onChange={e => setSearchValue(e.target.value)}
				/>
				<button type="button">
					<img className="srch_icn" src={SEARCH_ICON} alt="search" />
				</button>
			</div>
			{search(searchString)}
		</React.Fragment>
	);
};

SearchBox.defaultProps = {
	data: [],
	placeholder: 'Search',
	searchString: '',
};

SearchBox.propTypes = {
	data: PropTypes.array,
	searchString: PropTypes.string,
	placeholder: PropTypes.string,
	setSearchValue: PropTypes.func.isRequired,
};

export default SearchBox;
