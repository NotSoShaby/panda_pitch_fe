import React from 'react';
import Authorized from '../../routes/authorized';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from '../../components/loader';
import CreatePitch from './createPitch';

class Index extends Authorized {
	render() {
		return (
			<Loader isLoading={false}>
				<CreatePitch/>
			</Loader>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state
	};
};

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{},
		dispatch
	);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
