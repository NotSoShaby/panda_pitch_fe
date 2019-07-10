/* eslint-disable class-methods-use-this */
/* eslint-disable no-mixed-spaces-and-tabs */
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from '../../components/loader';
import Authorized from '../../routes/authorized';
import CreatePitch from './createPitch';
import { getPrClientsAuto } from '../../redux/actions/pitches';

class Index extends Authorized {
	componentDidMount() {
		const {
			getPrClientsAuto,
		} = this.props;
		getPrClientsAuto();
	}

	constructor(props) {
		super(props);
		this.state = {
			hideDiv: false,
			headlineText: '',
			answers: {},
			progressValue: 0,
			pressReleaseImage: '',
		};
	}

	handleClient = () => {
	};

	handleAddNewClient = () => {
		this.setState(
			{
				hideDiv: true,
			},
		);
	};

	handleAddProfile = () => {
	};

	handleAddTopics = () => {
	};

	handleAddMedia1 = () => {
	};

    handleAddMedia2 = () => {
    };

    handleAddMedia3 = () => {
    };

    handleInputText = (e) => {
    	this.setState({ [e.target.name]: e.target.value });
    	if (e.target.name === 'headline') {
    		if (e.target.value.length > 50) {
    			alert('Headline lenght shoulh be less than 50');
    			e.target.value = '';
    		}
    	}
    }

    handleRangeChange = (value) => {
    	this.setState({ progressValue: value.value });
    }

	handleAddPressRelease = (e) => {
		this.setState({
			pressReleaseImage: URL.createObjectURL(e.target.files[0]),
		});
	}


	render() {
		return (
			<Loader
				isLoading={
					false
				}
			>
				<CreatePitch
					{...this.state}
					{...this.props}
					steps={3}
					active={1}
					handleClient={this.handleClient}
					handleAddNewClient={this.handleAddNewClient}
					handleAddProfile={this.handleAddProfile}
					handleAddTopics={this.handleAddTopics}
					handleAddMedia1={this.handleAddMedia1}
					handleAddMedia2={this.handleAddMedia2}
					handleAddMedia3={this.handleAddMedia3}
					handleAddPressRelease={this.handleAddPressRelease}
					handleInputText={this.handleInputText}
					onRangeChange={this.handleRangeChange}
				/>
			</Loader>
		);
	}
}


const mapStateToProps = state => ({
	...state,
});

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		getPrClientsAuto: data => getPrClientsAuto(
			data,
		),
	},
	dispatch,
);

// connect to store
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Index);
