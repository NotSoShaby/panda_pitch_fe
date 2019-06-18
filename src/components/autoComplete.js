import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AutoComplete extends Component {
	state = {
		val: '',
		box: this.props.boxes || []
	};

	putInBox = (val) => {
		let { box } = this.state;
		let { onSelect } = this.props;
		let isExist = box.filter((item) => item === val);
		if (!isExist.length) {
			let boxes = box;
			boxes.push(val);
			onSelect(boxes);
			this.setState({ box, boxes, val: '' });
		}
	};

	setVal = (e) => this.setState({ val: e.target.value });

	renderList = () => {
		let { box, val } = this.state;
		let { onCreate, list } = this.props;
		let dropdownList = [];
		list.map((item, index) => {
			let isExist = box.filter((item1) => item1 === item.name);
			if (!isExist.length && item.name.toLowerCase().includes(val.toLowerCase())) {
				dropdownList.push(item.name);
			}
			return null;
		});
		if (val !== '')
			return (
				<div className="auto-selection-list">
					<ul>
						{dropdownList.length ? (
							dropdownList.map((item, index) => (
								<li key={index} onClick={() => this.putInBox(item)}>
									<span>{item}</span>
								</li>
							))
						) : (
							<li>
								<span onCreate={() => onCreate(val)}>create</span>
							</li>
						)}
					</ul>
				</div>
			);
	};

	render() {
		let { box, val } = this.state;
		return (
			<div className="auto-selection">
				<div className="custom_field">
					<input
						value={val}
						onChange={this.setVal}
						type="text"
						name="topics"
						id="topics"
						placeholder="Enter Any Topic"
					/>
					<label htmlFor="topics">Topic</label>
					{this.renderList()}
				</div>
				<div />
				<ul className="topic_list">
					{box.map((item, index) => (
						<li key={index}>
							<span>{item}</span>
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
	onCreate: () => {},
	onSelect: () => {}
};

// props type definition
AutoComplete.propTypes = {
	list: PropTypes.array.isRequired,
	onCreate: PropTypes.func,
	onSelect: PropTypes.func
};

// default importing
export default AutoComplete;
