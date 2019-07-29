import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
	state = {
		options: [],
		name: '',
		value: '',
		className: '',
		isListVisible: false,
	}

	componentDidMount() {
		const {
			options, name, value, className,
		} = this.props;
		this.setState({
			options, name, value: value || options[0].value || null, className,
		});
	}

	changeListVisibility = () => {
		const { isListVisible } = this.state;
		this.setState({ isListVisible: !isListVisible });
	}

	handleChangeInputChange = () => false

	handleChange(option) {
		const { onChangeSelect } = this.props;
		const { isListVisible } = this.state;
		this.setState({ value: option.value, isListVisible: !isListVisible });
		onChangeSelect(option);
	}

	render() {
		const {
			options, name, value, className, isListVisible,
		} = this.state;
		return (
			<React.Fragment>
				{/* <select
					className={className}
					value={value}
					onChange={e => this.handleChange(e)}
					name={name}
				>
					{options.map(option => (
						<option key={option.id} value={option.value}>
							{option.value}
						</option>
					))}
        </select> */}
				<div role="button">
					<input
						onClick={this.changeListVisibility}
						type="text"
						className={className}
						value={value}
						readOnly
						name={name}
					/>
				</div>
				{ isListVisible && (
					<ul className="selectUl">
						{options.map(option => (
							<li className="selectList" key={option.id} value={option.value} role="button" onClick={() => this.handleChange(option)}>
								{option.value}
							</li>
						))}
					</ul>
				)}

			</React.Fragment>
		);
	}
}

// props initialization ( default values )
Select.defaultProps = {
	className: '',
	value: '',
	onChangeSelect: () => { },
};

// props type definition
Select.propTypes = {
	options: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	className: PropTypes.string,
	onChangeSelect: PropTypes.func,
};

export default Select;
