import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Profile from './profile';
import { getUserById } from '../../redux/actions/user';
import { getMediaList } from '../../redux/actions/pitches';
import Loader from '../../components/loader';

// import Loader from '../../components/loader';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = { isVisible: false };
	}

	componentDidMount() {
		const {
			getUserByUserId, getUserById, getMediaList, mediaList, history: { location: { search } },
		} = this.props;
		if (!getUserById.code) {
			const id = search.split('=')[1];
			getUserByUserId(id);
		}
		if (!mediaList.code) {
			getMediaList();
		}
	}

	onMediaListButtonClick = () => {
		const { isVisible } = this.state;
		this.setState({ isVisible: !isVisible });
	}

	render() {
		const { getUserById: { isLoading } } = this.props;
		return (
			<Loader isLoading={isLoading}>
				<Profile
					{...this.props}
					{...this.state}
					onMediaListButtonClick={this.onMediaListButtonClick}
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
		getUserByUserId: data => getUserById(data),
		getMediaList: data => getMediaList(data),
	},
	dispatch,
);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
