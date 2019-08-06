import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectBox extends Component {
	state = {
		value: '',
		isListVisible: false,
	}

	componentDidMount() {
		const { value } = this.props;
		this.setState({ value });
	}

	changeListVisibility = () => {
		const { onChangeSelect } = this.props;
		this.setState({ isListVisible: true, value: '' });
		onChangeSelect({});
	}

	handleChange = (value) => {
		const { changeInput } = this.props;
		changeInput(value);
		this.setState({ value });
	}

	changeSelection(option) {
		const { onChangeSelect } = this.props;
		this.setState({ value: option.value || option.name, isListVisible: false });
		onChangeSelect(option);
	}

	render() {
		const {
			value, isListVisible,
		} = this.state;
		const { labelName, options } = this.props;
		return (
			<React.Fragment>
				<div className="srch_button">
					<input
						onClick={this.changeListVisibility}
						type="text"
						placeholder="Type to search..."
						onChange={e => this.handleChange(e.target.value)}
						value={value}
					/>
				</div>
				{isListVisible && options && options.length ? (
					<ul className="selectUl">
						{options.map(option => (
							<li className="selectList" key={option.url} value={option[labelName]} role="button" onClick={() => this.changeSelection(option)}>
								{option[labelName]}
							</li>
						))}
					</ul>
				) : null}

			</React.Fragment>
		);
	}
}

// props initialization ( default values )
SelectBox.defaultProps = {
	options: [],
	value: '',
	labelName: 'name',
	changeInput: () => { },
	onChangeSelect: () => { },
};

// props type definition
SelectBox.propTypes = {
	options: PropTypes.array,
	value: PropTypes.string,
	labelName: PropTypes.string,
	changeInput: PropTypes.func,
	onChangeSelect: PropTypes.func,
};

export default SelectBox;
