import React from 'react';
import { PropTypes } from 'prop-types';
import IMAGES from '../assets/images';

const imagepath = require('../../public/images/google.jpg');

const { SEARCH_ICON } = IMAGES;

class SearchBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.value || '',
			listVisible: false,
		};
	}

	componentWillReceiveProps(nextprops) {
		const { value } = nextprops;
		this.setState({ value });
	}

	changeSelection = (dataValue) => {
		const { onSelect } = this.props;
		this.setState({ value: dataValue.name, listVisible: false });
		onSelect(dataValue);
	};

	onChange = (value) => {
		const { setSearchValue } = this.props;
		this.setState({ value, listVisible: true });
		setSearchValue(value);
	};

	search = () => {
		const { searchString = '', data, showCreateButton } = this.props;
		if (!data || data.length === 0 || !Array.isArray(data)) {
			if (showCreateButton && searchString) { return this.createButton(); }
			return null;
		}
		return (
			<div className="srch_lst_row">
				{data
					&& data.length
					&& data.map((dataValue) => {
						const { name, image } = dataValue;
						if (searchString && name.toLowerCase().includes(searchString.toLowerCase())) {
							return (
								<div
									key={name}
									className="srch_lst_col"
									role="button"
									onClick={() => this.changeSelection(dataValue)}
								>
									<div className="srch_pic">
										<img src={image || imagepath} alt="profile_pic" />
									</div>
									<span className="pro_detail">
										<h3>{name}</h3>
									</span>
								</div>
							);
						}
						return null;
					})}
			</div>
		);
	};

	createButton = () => {
		const { onCreate } = this.props;
		const { value } = this.state;
		return (
			<div className="srch_lst_row" style={{ minHeight: '54px' }} onClick={() => onCreate(value)} role="button">
				<div className="srch_lst_col" role="button">
					<span className="pro_detail">
						<h3>Create</h3>
					</span>
				</div>
			</div>
		);
	};

	render() {
		const { searchString = '', placeholder } = this.props;
		const { value, listVisible } = this.state;
		return (
			<React.Fragment>
				<div key="search_box" className="srch_col place">
					<input
						type="search"
						placeholder={placeholder}
						value={value}
						onFocus={() => this.setState({ listVisible: true })}
						onChange={e => this.onChange(e.target.value)}
					/>
					<button type="button">
						<img className="srch_icn" src={SEARCH_ICON} alt="search" />
					</button>
				</div>
				{listVisible && this.search(searchString)}
			</React.Fragment>
		);
	}
}

SearchBox.defaultProps = {
	data: [],
	placeholder: 'Search',
	searchString: '',
	showCreateButton: false,
	onCreate: () => {},
};

SearchBox.propTypes = {
	data: PropTypes.array,
	searchString: PropTypes.string,
	placeholder: PropTypes.string,
	showCreateButton: PropTypes.bool,
	setSearchValue: PropTypes.func.isRequired,
	onCreate: PropTypes.func,
};

export default SearchBox;
