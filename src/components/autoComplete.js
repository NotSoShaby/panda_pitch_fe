import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AutoComplete extends Component {
	constructor(props) {
		super(props);
		this.state = {
			val: '',
			singleValidationError: '',
			box: props.boxes || [],
		};
	}

	componentWillReceiveProps(nextProps) {
		const { boxes } = nextProps;
		this.setState({ box: boxes });
	}

	// add item in selected tag list
	putInBox = (val) => {
		const { box } = this.state;
		const {
			onSelect, list, maxLength,
		} = this.props;
		const isExist = box.filter(({ value }) => value === val);
		if (!isExist.length) {
			let pushItem = true;
			if (maxLength) {
				const activeItem = box.filter(dataValue => dataValue.isActive);
				if (activeItem.length === maxLength) {
					pushItem = false;
				}
			}
			if (pushItem) {
				const boxes = box;
				boxes.push({ value: val, isActive: true });
				onSelect(this.handleSelection(
					boxes, list, { value: val, isActive: true, index: box.length - 1 },
				));
				this.setState({ box: boxes, val: '' });
			} else {
				this.setState({
					singleValidationError: `Only ${maxLength} item can be select. Disable other item to add this item.`,
					val: '',
				});
			}
		}
	};

	// handle on input change
	setVal = (e) => {
		const { onChange } = this.props;
		onChange(e.target.value);
		this.setState({ val: e.target.value });
	};

	// handle on selection from dropdown list
	onItemSelection = val => this.putInBox(val);

	// create a new tag
	onCreate = async (val) => {
		const { onCreate } = this.props;
		await onCreate(val);
		// this.putInBox(val);
	};

	// render dropdown list
	renderList = () => {
		const { val } = this.state;
		const dropdownList = this.getDropdownList();
		if (val !== '' && dropdownList.length) {
			return (
				<div className="auto-selection-list">
					<ul>
						{dropdownList.map(item => (
							<li key={item} onClick={() => this.putInBox(item)} role="button">
								<span>{item}</span>
							</li>
						))}
					</ul>
				</div>
			);
		}
		return null;
	};

	// show create button
	renderCreateButton = () => {
		const { val } = this.state;
		const { showAddButton } = this.props;
		const list = this.getDropdownList();
		if (!list.length && val !== '' && showAddButton) {
			return <i className="fa fa-plus" aria-hidden="true" onClick={() => this.onCreate(val)} />;
		}
		return null;
	};

	// get dropdown list
	getDropdownList = () => {
		const { box, val } = this.state;
		const { list } = this.props;
		const dropdownList = [];
		if (list && list.length) {
			list.map((item) => {
				const isExist = box.filter(item1 => item1.value.toLowerCase() === item.name.toLowerCase());
				if (!isExist.length && item.name && item.name.toLowerCase().includes(val.toLowerCase())) {
					const isCreate = item.name.toLowerCase().split(' ');
					if (isCreate[0] !== 'create') {
						dropdownList.push(item.name);
					}
				}
				return null;
			});
		}
		return dropdownList;
	};

	// toggle status of selected tag
	toggleStatus = (index) => {
		const { onSelect, maxLength } = this.props;
		const { box } = this.state;
		let pushItem = true;
		if (!box[index].isActive && maxLength) {
			const activeItem = box.filter(dataValue => dataValue.isActive);
			if (activeItem.length === maxLength) {
				pushItem = false;
			}
		}
		if (pushItem) {
			box[index].isActive = !box[index].isActive;
			this.setState({ box, singleValidationError: '' });
			onSelect(box, { ...box[index], index });
		} else {
			this.setState({
				singleValidationError: `Only ${maxLength} item can be select. Disable other item to add this item.`,
			});
		}
	};

	// handle Selection
	handleSelection = (list, data, item) => {
		const { index } = this.props;
		const urlObject = data.find((datum => datum.name === item.value)); // finding url
		if (urlObject) list[item.index].url = urlObject.url; // assigning url in list object
		if (index && urlObject) list[item.index][index] = urlObject[index];
		return list; // returning list to update state
	}

	render() {
		const { box, val, singleValidationError } = this.state;
		const {
			showTextBox, name, errors, className,
		} = this.props;
		return (
			<div className={`auto-selection ${className}`}>
				{showTextBox && (
					<div className="custom_field">
						<input
							value={val || ''}
							onChange={this.setVal}
							type="text"
							name={name}
							autoComplete="off"
							id={name}
							placeholder="Type to search or create new ..."
						/>

						<label htmlFor={name}>{name}</label>
						{this.renderCreateButton()}
						{this.renderList()}
					</div>
				)}
				{ singleValidationError ? (
					<div className="error">
						<p>{singleValidationError}</p>
					</div>
				) : null}
				<div />
				{errors && <div className="error">{errors.map(msg => <p key={msg}>{msg}</p>)}</div>}
				<ul className="topic_list">
					{box.map(({ value, isActive }, count) => (
						<li
							key={value}
							className={`${isActive ? 'active' : ''}`}
							onClick={() => this.toggleStatus(count)}
							role="button"
						>
							<span>{value}</span>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

// props initialization ( default values )
AutoComplete.defaultProps = {
	list: [],
	index: '',
	showTextBox: true,
	className: '',
	showAddButton: true,
	onCreate: () => { },
	onChange: () => { },
	onSelect: () => { },
	maxLength: 0,
};

// props type definition
AutoComplete.propTypes = {
	showTextBox: PropTypes.bool,
	showAddButton: PropTypes.bool,
	list: PropTypes.array,
	index: PropTypes.string,
	onCreate: PropTypes.func,
	onSelect: PropTypes.func,
	onChange: PropTypes.func,
	className: PropTypes.string,
	maxLength: PropTypes.number,
};

// default importing
export default AutoComplete;
