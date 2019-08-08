import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class AutoComplete extends Component {
	constructor(props) {
		super(props);
		this.state = {
			val: '',
			singleValidationError: '',
			box: props.boxes || [],
		};
	}

	// add item in selected tag list
	putInBox = (val) => {
		const { box } = this.state;
		const { onSelect, list, multiselect } = this.props;
		const isExist = box.filter(({ value }) => value === val);
		if (!isExist.length) {
			const boxes = box;
			let isActive = true;
			if (!multiselect) {
				const activeItem = _.find(boxes, 'isActive');
				isActive = !activeItem;
			}
			boxes.push({ value: val, isActive });
			onSelect(this.handleSelection(
				boxes, list, { value: val, isActive, index: box.length - 1 },
			));
			this.setState({ box: boxes, val: '' });
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
		const list = this.getDropdownList();
		if (!list.length && val !== '') {
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
		const { onSelect, multiselect } = this.props;
		const { box } = this.state;
		let activeItem;
		if (!multiselect) {
			activeItem = _.find(box, 'isActive');
			if (activeItem && activeItem !== box[index]) {
				this.setState({
					singleValidationError:
					'This is single select. Please deselect the selected one and then select another.',
				});
				return;
			}
		}
		box[index].isActive = !box[index].isActive;
		this.setState({ box, singleValidationError: '' });
		onSelect(box, { ...box[index], index });
	};

	// handle Selection
	handleSelection = (list, data, item) => {
		const urlObject = data.find((datum => datum.name === item.value)); // finding url
		if (urlObject) list[item.index].url = urlObject.url; // assigning url in list object
		return list; // returning list to update state
	}

	render() {
		const { box, val, singleValidationError } = this.state;
		const { showTextBox, name, errors } = this.props;
		return (
			<div className="auto-selection">
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
				{ singleValidationError ? <div className="error">{singleValidationError}</div> : null}
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
	showTextBox: true,
	multiselect: true,
	onCreate: () => { },
	onChange: () => { },
	onSelect: () => { },
};

// props type definition
AutoComplete.propTypes = {
	showTextBox: PropTypes.bool,
	multiselect: PropTypes.bool,
	list: PropTypes.array,
	onCreate: PropTypes.func,
	onSelect: PropTypes.func,
	onChange: PropTypes.func,
};

// default importing
export default AutoComplete;
