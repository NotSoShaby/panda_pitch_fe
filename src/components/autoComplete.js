import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AutoComplete extends Component {
	constructor(props) {
		super(props);
		this.state = {
			val: '',
			box: props.boxes || [],
		};
	}

	// add item in selected tag list
	putInBox = (val) => {
		const { box } = this.state;
		const { onSelect } = this.props;
		const isExist = box.filter(({ value }) => value === val);
		if (!isExist.length) {
			const boxes = box;
			boxes.push({ value: val, isActive: true });
			onSelect(boxes);
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
	onCreate = (val) => {
		const { onCreate } = this.props;
		this.putInBox(val);
		onCreate(val);
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
		list.map((item) => {
			const isExist = box.filter(item1 => item1.value.toLowerCase() === item.text.toLowerCase());
			if (!isExist.length && item.text && item.text.toLowerCase().includes(val.toLowerCase())) {
				const isCreate = item.text.toLowerCase().split(' ');
				if (isCreate[0] !== 'create') {
					dropdownList.push(item.text);
				}
			}
			return null;
		});
		return dropdownList;
	};

	// toggle status of selected tag
	toggleStatus = (index) => {
		const { onSelect } = this.props;
		const { box } = this.state;
		box[index].isActive = !box[index].isActive;
		this.setState({ box });
		onSelect(box);
	};

	render() {
		const { box, val } = this.state;
		const { showTextBox } = this.props;
		return (
			<div className="auto-selection">
				{showTextBox && (
					<div className="custom_field">
						<input
							value={val || ''}
							onChange={this.setVal}
							type="text"
							name="topics"
							autoComplete="off"
							id="topics"
							placeholder="Enter Any Topic"
						/>

						<label htmlFor="topics">Topic</label>
						{this.renderCreateButton()}
						{this.renderList()}
					</div>
				)}
				<div />
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
	onCreate: () => {},
	onChange: () => {},
	onSelect: () => {},
};

// props type definition
AutoComplete.propTypes = {
	showTextBox: PropTypes.bool,
	list: PropTypes.array,
	onCreate: PropTypes.func,
	onSelect: PropTypes.func,
	onChange: PropTypes.func,
};

// default importing
export default AutoComplete;
