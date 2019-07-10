import React, { Component } from 'react';
import _ from 'lodash';
import Personalization from './personalization';

class Index extends Component {
	// Defining state
	state = {
		screen: true,
		steps: 3,
		active: 2,
		options: [{ id: 1, value: 'Yahoo' },
			{ id: 2, value: 'Google' }, { id: 3, value: 'Microsoft' }, { id: 4, value: 'Facebook' }],
		name: '',
		value: '',
		val: '',
		journalists: [{ id: 1, name: 'shhh koi h' }, { id: 2, name: 'chal be' }, { id: 3, name: 'koi nhi hai' }],
		selectedJournalists: [],
	};

	onChangeSelect = (selectedValue) => { console.log('xxxxxx', selectedValue); }

	handlePrSelect = (id) => {
		const { journalists, selectedJournalists } = this.state;
		const journalistSelected = _.find(selectedJournalists, o => o.id === id);
		const journal = journalistSelected ? [...selectedJournalists]
			: [...selectedJournalists, _.find(journalists, o => o.id === id)];
		this.setState({ selectedJournalists: journal, val: '' });
	}

	setVal = (val) => {
		this.setState({ val });
	}

	handleJournalistMessageChange= (e, id) => {
		const { selectedJournalists } = this.state;
		selectedJournalists[id].personalMessage = e.target.value;
		this.setState({ selectedJournalists });
	}

	render() {
		const { screen } = this.state;
		return (screen
			&& (
				<Personalization
					{...this.state}
					{...this.props}
					onChangeSelect={this.onChangeSelect}
					handlePrSelect={this.handlePrSelect}
					setVal={this.setVal}
					addMessageForJournalist={this.handleJournalistMessageChange}
				/>
			)
		);
	}
}

export default Index;
