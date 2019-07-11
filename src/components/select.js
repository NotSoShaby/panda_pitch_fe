import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
	state = {
		options: [],
		name: '',
		value: '',
		className: '',
	}

	componentDidMount() {
		const {
			options, name, value, className,
		} = this.props;
		this.setState({
			options, name, value, className,
		});
	}

	handleChange(e) {
		const { onChange } = this.props;
		this.setState({ value: e.target.value });
		onChange(e.target.value);
	}

	render() {
		const {
			options, name, value, className,
		} = this.state;
		return (
			<React.Fragment>
				<select
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
				</select>
			</React.Fragment>
		);
	}
}

// props initialization ( default values )
Select.defaultProps = {
	className: '',
	value: '',
	onChange: () => { },
};

// props type definition
Select.propTypes = {
	options: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	className: PropTypes.string,
	onChange: PropTypes.func,
};

export default Select;
