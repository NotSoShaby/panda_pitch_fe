import React from 'react';
import { PropTypes } from 'prop-types';
import IMAGES from '../assets/images';

const imagepath = require('../../public/images/google.jpg');

const { SEARCH_ICON } = IMAGES;

class SearchBox extends React.Component {
	state = {
		value: '',
		listVisible: false,
	}

	changeSelection = ({ url, name }) => {
		const { onSelect } = this.props;
		this.setState({ value: '', listVisible: false });
		onSelect({ id: url, name });
	}

	onChange = (value) => {
		const { setSearchValue } = this.props;
		this.setState({ value, listVisible: true });
		setSearchValue(value);
	}

	search = () => {
		const { searchString, data } = this.props;
		const { listVisible } = this.state;
		if (!data || data.length === 0) return null;
		return (
			<div className="srch_lst_row">
				{/* {data.map(({ name, profile, profilePic }) => { */}
				{data && data.length && data.map(({ id: url, name }) => {
					if (listVisible && searchString
						&& name.toLowerCase().includes(searchString.toLowerCase())) {
						return (
							<div key={name} className="srch_lst_col" role="button" onClick={() => this.changeSelection({ url, name })}>
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

	render() {
		const { searchString, placeholder } = this.props;
		const { value } = this.state;
		return (
			<React.Fragment>
				<div key="search_box" className="srch_col place">
					<input
						type="search"
						placeholder={placeholder}
						value={value}
						onChange={e => this.onChange(e.target.value)}
					/>
					<button type="button">
						<img className="srch_icn" src={SEARCH_ICON} alt="search" />
					</button>
				</div>
				{this.search(searchString)}
			</React.Fragment>
		);
	}
}

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
