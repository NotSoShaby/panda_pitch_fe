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

	putInBox = (val) => {
		const { box } = this.state;
		const { onSelect } = this.props;
		const isExist = box.filter(item => item === val);
		if (!isExist.length) {
			const boxes = box;
			boxes.push(val);
			onSelect(boxes);
			this.setState({ box: boxes, val: '' });
		}
	};

	setVal = e => this.setState({ val: e.target.value });

	renderList = () => {
		const { box, val } = this.state;
		const { list } = this.props;
		const dropdownList = [];
		if (list.length) {
			list.map((item) => {
				const isExist = box.filter(item1 => item1 === item.name);
				if (!isExist.length && item.name.toLowerCase().includes(val.toLowerCase())) {
					dropdownList.push(item.name);
				}
				return null;
			});
		}
		if (val !== '') {
			return (
				<div className="auto-selection-list">
					<ul>
						{dropdownList.length ? (
							dropdownList.map(item => (
								<li key={item} onClick={() => this.putInBox(item)} role="button">
									<span>{item}</span>
								</li>
							))
						) : (
							<li>
								<span onClick={() => this.putInBox(val)} role="button">create</span>
							</li>
						)}
					</ul>
				</div>
			);
		}
		return null;
	};

	render() {
		const { box, val } = this.state;
		return (
			<div className="auto-selection">
				<div className="custom_field">
					<input
						value={val || ''}
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
					{box.map(item => (
						<li key={item}>
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
	// onCreate: () => {},
	onSelect: () => {},
};

// props type definition
AutoComplete.propTypes = {
	list: PropTypes.array.isRequired,
	// onCreate: PropTypes.func,
	onSelect: PropTypes.func,
};

// default importing
export default AutoComplete;
