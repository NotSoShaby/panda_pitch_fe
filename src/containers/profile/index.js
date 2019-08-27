import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Profile from './profile';
import { getUserById } from '../../redux/actions/user';

// import Loader from '../../components/loader';

class Index extends Component {
	componentDidMount() {
		const { login: { data = {} }, profile, getUserById } = this.props;
		console.log('jjj========>', this.props, profile.code !== 'SUCCESS');
		if (profile.code !== 'SUCCESS') { getUserById(data.id); }
	}

	render() {
		return (
			// <Loader isLoading={!HELPER.isSuccessInApi(this.props.survey.code)}>
			<Profile
				{...this.props}
				{...this.state}
			/>
			// </Loader>
		);
	}
}

const mapStateToProps = state => ({
	...state,
});

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		getUserById: data => getUserById(data),
	},
	dispatch,
);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
