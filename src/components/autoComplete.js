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

	setVal = (e) => {
    let { onChange } = this.props;
    onChange(e.target.value)
    this.setState({ val: e.target.value });
  }

	renderList = () => {
		let { box, val } = this.state;
		let { list } = this.props;
    let dropdownList = [];
    list.length &&
			list.map((item) => {
				let isExist = box.filter((item1) => item1 === item.text);
				if (!isExist.length && item.text && item.text.toLowerCase().includes(val.toLowerCase())) {
					dropdownList.push(item.text);
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
								<span onClick={() => this.putInBox(val)}>create</span>
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
  // onCreate: () => {},
  onChange: () => {},
	onSelect: () => {}
};

// props type definition
AutoComplete.propTypes = {
	list: PropTypes.array.isRequired,
	// onCreate: PropTypes.func,
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
};

// default importing
export default AutoComplete;
